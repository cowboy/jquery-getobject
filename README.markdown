# jQuery getObject: get.and.set.deep.objects.easily = true; #
[http://benalman.com/projects/jquery-getobject-plugin/](http://benalman.com/projects/jquery-getobject-plugin/)

Version: 1.1, Last updated: 12/24/2009

jQuery getObject allows you to get and set properties of an object via
dot-delimited name string. Inspired by the Dojo methods of the same names.

Visit the [project page](http://benalman.com/projects/jquery-getobject-plugin/) for more information and usage examples!

### Note for non-jQuery users ###

jQuery isn't actually required for this plugin, because nothing internal
uses any jQuery methods or properties. jQuery is just used as a namespace
under which these methods can exist.

Since jQuery isn't actually required for this plugin, if jQuery doesn't exist
when this plugin is loaded, the methods described below will be created in
the `Cowboy` namespace. Usage will be exactly the same, but instead of
$.method() or jQuery.method(), you'll need to use Cowboy.method().

### Note for Dojo users ###

The setObject, getObject, and exists methods are similar to their Dojo
counterparts, with the exception that exists returns true or false based
on whether or not a property is defined, not whether it is truthy.


## Documentation ##
[http://benalman.com/code/projects/jquery-getobject/docs/](http://benalman.com/code/projects/jquery-getobject/docs/)


## Support and Testing ##
Information about what version or versions of jQuery this plugin has been
tested with, what browsers it has been tested in, and where the unit tests
reside (so you can test it yourself).

### jQuery Versions ###
none, 1.3.2, 1.4a2

### Browsers Tested ###
Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome, Opera 9.6-10.

### Unit Tests ###
[http://benalman.com/code/projects/jquery-getobject/unit/](http://benalman.com/code/projects/jquery-getobject/unit/)


## Release History ##

1.1 - (12/24/2009) Removed dependency on jQuery. Now creates methods in a `Cowboy` namespace if jQuery isn't present.  
1.0 - (12/19/2009) Initial release  


## License ##
Copyright (c) 2009 "Cowboy" Ben Alman  
Dual licensed under the MIT and GPL licenses.  
[http://benalman.com/about/license/](http://benalman.com/about/license/)  

Inspired by Dojo, which is Copyright © 2005-2009, The Dojo Foundation.
