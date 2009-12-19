/*!
 * jQuery getObject - v1.0 - 12/19/2009
 * http://benalman.com/projects/jquery-getobject-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 * 
 * Inspired by Dojo, which is Copyright (c) 2005-2009, The Dojo Foundation.
 */

// Script: jQuery getObject: get.and.set.deep.objects.easily = true;
//
// *Version: 1.0, Last updated: 12/19/2009*
// 
// Project Home - http://benalman.com/projects/jquery-getobject-plugin/
// GitHub       - http://github.com/cowboy/jquery-getobject/
// Source       - http://github.com/cowboy/jquery-getobject/raw/master/jquery.ba-getobject.js
// (Minified)   - http://github.com/cowboy/jquery-getobject/raw/master/jquery.ba-getobject.min.js (0.6kb)
// 
// About: License
// 
// Copyright (c) 2009 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// Inspired by Dojo, which is Copyright (c) 2005-2009, The Dojo Foundation.
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.3.2, 1.4a2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome, Opera 9.6-10.
// Unit Tests      - http://benalman.com/code/projects/jquery-getobject/unit/
// 
// About: Release History
// 
// 1.0 - (12/19/2009) Initial release
// 
// Topic: Note for Dojo users
// 
// The setObject, getObject, and exists methods are similar to their Dojo
// counterparts, with the exception that exists returns true or false based
// on whether or not a property is defined, not whether it is truthy.

(function($,window,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  var jq_getObject;
  
  // Method: jQuery.getObject
  // 
  // Get a property of an object via dot-delimited name string, and optionally
  // create the property and any ancestor properties that do not already exist.
  // 
  // Usage:
  // 
  //  > jQuery.getObject( name [, create ] [, context ] );
  // 
  // Arguments:
  // 
  //  name - (String) Dot-delimited string representing a property name, for
  //    example: 'document', 'location.href', 'window.open' or 'foo.bar.baz'.
  //  create - (Boolean) Create final and intermediate properties if they don't
  //    exist. Defaults to false.
  //  context - (Object) Optional context in which to evaluate name. Defaults to
  //    window if omitted.
  // 
  // Returns:
  // 
  //  (Object) An object reference or value on success, otherwise undefined.
  
  $.getObject = jq_getObject = function( parts, create, obj ) {
    
    if ( typeof parts === 'string' ) {
      parts = parts.split('.');
    }
    
    if ( typeof create !== 'boolean' ) {
      obj = create;
      create = undefined;
    }
    
    obj = obj || window;
    
    var p;
    
    while ( obj && parts.length ) {
      p = parts.shift();
      if ( obj[p] === undefined && create ) {
        obj[p] = {};
      }
      obj = obj[p];
    }
    
    return obj;
  };
  
  // Method: jQuery.setObject
  // 
  // Set a property of an object via dot-delimited name string, creating any
  // ancestor properties that do not already exist.
  // 
  // Usage:
  // 
  //  > jQuery.setObject( name, value, [ context ] );
  // 
  // Arguments:
  // 
  //  name - (String) Dot-delimited string representing a property name, for
  //    example: 'document', 'location.href', 'window.open' or 'foo.bar.baz'.
  //  value - (Anything) Any valid JavaScript expression.
  //  context - (Object) Optional context in which to evaluate name. Defaults to
  //    window if omitted.
  // 
  // Returns:
  // 
  //  (Anything) The value if set successfully, otherwise undefined.
  
  $.setObject = function( name, value, context ) {
    var parts = name.split('.'),
      prop = parts.pop(),
      obj = jq_getObject( parts, true, context );
    
    // Only return the value if it is set successfully.
    return obj && typeof obj === 'object' && prop
      ? ( obj[prop] = value )
      : undefined;
  };
  
  // Method: jQuery.exists
  // 
  // Using dot-delimited name string, return whether a property of an object
  // exists.
  // 
  // Usage:
  // 
  //  > jQuery.exists( name [, context ] );
  // 
  // Arguments:
  // 
  //  name - (String) Dot-delimited string representing a property name, for
  //    example: 'document', 'location.href', 'window.open' or 'foo.bar.baz'.
  //  context - (Object) Optional context in which to evaluate name. Defaults to
  //    window if omitted.
  // 
  // Returns:
  // 
  //  (Boolean) Whether or not the property exists.
  
  $.exists = function( name, context ) {
    return jq_getObject( name, context ) !== undefined;
  };
  
})(jQuery,this);
