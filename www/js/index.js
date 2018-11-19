/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        var adUnit = "ca-app-pub-9562640839848792/6622809054";
        var adUnitFullScreen = "ca-app-pub-9562640839848792/6622809054";
        var isOverlap = true; //true: overlap, false: split
        var isTest = true;

        if ( window.plugins && window.plugins.AdMob ) 
        {
            window.admob.setUp(adUnit, adUnitFullScreen, isOverlap, isTest);

            //banner ad callback
            window.admob.onBannerAdPreloaded = function() {
                alert('onBannerAdPreloaded');
            };
            window.admob.onBannerAdLoaded = function() {
                alert('onBannerAdLoaded');
            };
            //full screen ad callback
            window.admob.onFullScreenAdPreloaded = function() {
                alert('onFullScreenAdPreloaded');
            };
            window.admob.onFullScreenAdLoaded = function() {
                alert('onFullScreenAdLoaded');
            };
            window.admob.onFullScreenAdShown = function() {
                alert('onFullScreenAdShown');
            };
            window.admob.onFullScreenAdHidden = function() {
                alert('onFullScreenAdHidden');
            };

            window.admob.preloadBannerAd();
            window.admob.showBannerAd('bottom-center', 'SMART_BANNER');

        } else {
            //alert( 'admob plugin not ready' );
        }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        /*var push = PushNotification.init({
            android: {
            },
            ios: {
                alert: "true",
                badge: true,
                sound: 'false'
            }
        });

        push.on('registration', function (data) {
            console.log(data.registrationId);
            console.log(data.registrationType);
            document.getElementById("registration").appendChild(document.createTextNode(data.registrationId));
        });

        push.on('notification', function (data) {
            var ul = document.getElementById("pushList");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(data.message));
            ul.appendChild(li);
            console.log(data.message);
            console.log(data.title);
            console.log(data.count);
            console.log(data.sound);
            console.log(data.image);
            console.log(data.additionalData);
        });*/
    }
};

app.initialize();