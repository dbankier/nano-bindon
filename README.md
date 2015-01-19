#Nano BindOn 

A plugin for [nano](https://github.com/dbankier/nano) to change the view event.
By default nano binds on the `change` event. This plugin lets you bind on any other
`ti` event.

Requires nano version > 0.2.0

Read nano docs there.

##Install

From the root of your existing alloy project you can either.

Install using [gitto](http://gitt.io/)

~~~
$ gittio install nano
$ gittio install nano-bindon
~~~

or install using npm

~~~
$ npm install ti-nano ti-nano-bindon
~~~

It will copy all the required libraries to your `app/lib` folder.

##Setup

Add the following to your `alloy.js` file:

~~~
var nano = require("nano");
var bindon = require("nano-bindon");
nano.load(bindon());
~~~

Then use nano as normal in your controller, e.g.

~~~
nano($,$model);
~~~

##Binding

The default syntax is `{{ attribute }}`. Currently there is a limitation in Alloy that prevents its usage.
See [this issue](https://github.com/dbankier/nano/issues/1).

For the examples below the follow command was used to change the syntax:

~~~
nano.syntax(/\-\=(.+?)\=\-/gi);
~~~

This changes the syntax `-= attribute =-`. 

### bindon attribute 

With the plugin you can now add the `nbindon` attribute, e.g.

~~~
<Alloy>
	<Window bindon="container">
    <View top="100" layout="vertical">
      <TextField value="{{value}}" bindon="blur"></TextField>
      <TextField value="{{value}}" bindon="click"></TextField>
      <TextField value="{{value}}"></TextField>
      <Label>{{value}}</Label>
      </View>
	</Window>
</Alloy>
~~~

The first `TextField` will bind on the `blur` event.
The second `TextField` will bind on the `click` event.
The third `TextField` will bind on the `change` event (the default nano setting).


##Building from Source

Building the distributable is done using [grunt](http://gruntjs.com/)

Enter the following:

~~~
$ npm install
$ grunt
~~~

The built library is found in at `dist/nano-bindon.js`

