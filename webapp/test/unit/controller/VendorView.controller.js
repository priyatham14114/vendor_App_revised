/*global QUnit*/

sap.ui.define([
	"comapp/vendorapp/controller/VendorView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("VendorView Controller");

	QUnit.test("I should test the VendorView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
