/*
 * Copyright (c) 2015, Groupon, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 *
 * Neither the name of GROUPON nor the names of its contributors may be
 * used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';
var net = require('net');

var Bluebird = require('bluebird');

function findPort() {
  return new Bluebird(function resolveWithPort(resolve, reject) {
    var server = net.createServer();
    server.on('error', reject);
    server.listen(0, function onListen() {
      var port = server.address().port;
      server.on('close', resolve.bind(null, port));
      server.close();
    });
  });
}

function isAvailable(port) {
  return new Bluebird(function resolveWithAvailable(resolve, reject) {
    var socket = net.connect(port);
    socket.setTimeout(3000, function onTimeout() {
      socket.destroy();
      var error = new Error('ETIMEDOUT');
      error.code = 'ETIMEDOUT';
      reject(error);
    });
    socket.on('error', function onError(error) {
      if (error.code === 'ECONNREFUSED') {
        return resolve(true);
      }
      reject(error);
    });
    socket.on('connect', function onConnect() {
      socket.destroy();
      resolve(false);
    });
  });
}

module.exports = findPort;
findPort.findPort = findPort;
findPort.default = findPort;
findPort.isAvailable = isAvailable;
