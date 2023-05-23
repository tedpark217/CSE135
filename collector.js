//static
/*let agent = navigator.userAgent;
let language = navigator.language;
let cookies = navigator.cookieEnabled;
let jsEnabled = false;
if(agent != null){
    jsEnabled = true;
}

//check allows images
//check allows css

//screen
let screenH = screen.height;
let screenW = screen.width;

//window
let windowH = screen.availHeight;
let windowW = screen.availWidth;

let type = navigator.connection.effectiveType;*/

//performance


//activity

(function() {
  // data structure
  var data = {
    session: {},
    staticData: {},
    performanceData: {},
    activityData: {
      errors: [],
      mouseActivity: [],
      keyboardActivity: [],
      idleTime: [],
      pageVisits: []
    }
  };

  // Collect Static Data
  var collectStaticData = function() {
    var sData = data.staticData;
    sData.userAgent = navigator.userAgent;
    sData.language = navigator.language;
    sData.acceptCookies = navigator.cookieEnabled;
    sData.javascriptEnabled = true; 
    sData.screenSize = {
      width: screen.width,
      height: screen.height
    };
    sData.windowSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    sData.connection = navigator.connection ? navigator.connection.effectiveType : 'unknown';
    //below for CSS validation
    let testElement = document.createElement('div');
    testElement.style.display = 'none';
    testElement.className = 'cssTest';
    document.body.appendChild(testElement);
    let styles = window.getComputedStyle(testElement);
    if (styles && styles.width == '100px') {
        sData.allowsCSS = true;
    } else {
        sData.allowsCSS = false;
    }
    document.body.removeChild(testElement);
    //below for image validation
    /*
    let img = new Image();
    img.onload = function() {
        sData.allowsImages = true;
    };
    img.onerror = function() {
        sData.allowsImages = false;
    };
    img.src = 'testImage.jpg';
    */
  };
  
  // Collect Performance Data
  var collectPerformanceData = function() {
    if (performance.getEntriesByType("navigation").length > 0) {
      var p = performance.getEntriesByType("navigation")[0];
      data.performanceData.timing = p;
      data.performanceData.startLoading = p.loadEventStart;
      data.performanceData.endLoading = p.loadEventEnd;
      data.performanceData.totalLoadTime = p.loadEventEnd - p.loadEventStart;
    }
  };
  
  // Collect Activity Data
  //var collectActivityData = function() {
    // Errors
    window.onerror = function(message, url, lineNumber, columnNumber, errorObject) {
      data.activityData.errors.push({
        message: message,
        url: url,
        lineNumber: lineNumber,
        columnNumber: columnNumber,
        errorObject: errorObject
      });
      return false;
    };
  
    // Mouse activity
    document.addEventListener('DOMContentLoaded', function() {
      document.addEventListener('mousemove', (e) => {
        data.activityData.mouseActivity.push({
          type: 'move',
          x: e.clientX,
          y: e.clientY,
          timestamp: new Date(),
        });
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
      document.addEventListener('click', (e) => {
        data.activityData.mouseActivity.push({
          type: 'click',
          x: e.clientX,
          y: e.clientY,
          button: e.button,
          timestamp: new Date(),
        });
      });
    });
    
    window.addEventListener('scroll', (e) => {
      data.activityData.mouseActivity.push({
        x: window.scrollX,
        y: window.scrollY,
        timestamp: new Date(),
      });
    });
  
    // Keyboard activity
    document.addEventListener('keydown', (e) => {
      data.activityData.keyboardActivity.push({
        type: 'keydown',
        key: e.key,
        timestamp: new Date(),
      });
    });

    document.addEventListener('keyup', (e) => {
      data.activityData.keyboardActivity.push({
        type: 'keyup',
        key: e.key,
        timestamp: new Date(),
      });
    });
  
    // Idle time
    var idleStart, idleEnd;
    var trackIdle = function() {
      idleEnd = new Date();
      data.activityData.idleTime.push({
        start: idleStart,
        end: idleEnd,
        duration: idleEnd - idleStart
      });
    };
  
    // Idle timer
    var idleTimer = setTimeout(trackIdle, 2000);
  
    document.onmousemove = document.onkeypress = function() {
      clearTimeout(idleTimer);
      idleStart = new Date();
      idleTimer = setTimeout(trackIdle, 2000);
    };
  //};
  
  // Collect page visits
  data.activityData.pageVisits.push({
    url: window.location.href,
    timestamp: new Date()
  });

  let sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
      localStorage.setItem('sessionId', sessionId);
  }
  data.session.sessionId = sessionId;
  
  // When user leaves
  window.onbeforeunload = function() {
    collectStaticData();
    collectPerformanceData();
    //collectActivityData();
  
    data.activityData.pageVisits[data.activityData.pageVisits.length - 1].leaveTimestamp = new Date();
  
    // Send data
    var headers = {type: 'application/json'};
    var blob = new Blob([JSON.stringify(data)], headers);
    navigator.sendBeacon('https://csesd.site/json/api', blob);

    /*
    var dataStatic = {session: data.session, staticData: data.staticData};
    var blobStatic = new Blob([JSON.stringify(dataStatic)], headers);
    navigator.sendBeacon('https://csesd.site/json/api/static', blobStatic);

    var dataPerformance = {session: data.session, performanceData: data.performanceData};
    var blobPerformance = new Blob([JSON.stringify(dataPerformance)], headers);
    navigator.sendBeacon('https://csesd.site/json/api/performance', blobPerformance);

    var dataActivity = {session: data.session, activityData: data.activityData};
    var blobActivity = new Blob([JSON.stringify(dataActivity)], headers);
    navigator.sendBeacon('https://csesd.site/json/api/activity', blobActivity);
    */
  };
})();