/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('@angular/core'), require('@angular/forms'), require('@angular/material/core'), require('@angular/common'), require('@angular/cdk/observers')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/cdk/a11y', '@angular/cdk/coercion', '@angular/core', '@angular/forms', '@angular/material/core', '@angular/common', '@angular/cdk/observers'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.checkbox = global.ng.material.checkbox || {}),global.ng.cdk.a11y,global.ng.cdk.coercion,global.ng.core,global.ng.forms,global.ng.material.core,global.ng.common,global.ng.cdk.observers));
}(this, (function (exports,_angular_cdk_a11y,_angular_cdk_coercion,_angular_core,_angular_forms,_angular_material_core,_angular_common,_angular_cdk_observers) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Injection token that can be used to specify the checkbox click behavior.
 */
var MAT_CHECKBOX_CLICK_ACTION = new _angular_core.InjectionToken('mat-checkbox-click-action');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Increasing integer for generating unique ids for checkbox components.
var nextUniqueId = 0;
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * \@docs-private
 */
var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return MatCheckbox; }),
    multi: true
};
/** @enum {number} */
var TransitionCheckState = {
    /** The initial state of the component before any user interaction. */
    Init: 0,
    /** The state representing the component when it's becoming checked. */
    Checked: 1,
    /** The state representing the component when it's becoming unchecked. */
    Unchecked: 2,
    /** The state representing the component when it's becoming indeterminate. */
    Indeterminate: 3,
};
TransitionCheckState[TransitionCheckState.Init] = "Init";
TransitionCheckState[TransitionCheckState.Checked] = "Checked";
TransitionCheckState[TransitionCheckState.Unchecked] = "Unchecked";
TransitionCheckState[TransitionCheckState.Indeterminate] = "Indeterminate";
/**
 * Change event object emitted by MatCheckbox.
 */
var MatCheckboxChange = (function () {
    function MatCheckboxChange() {
    }
    return MatCheckboxChange;
}());
/**
 * \@docs-private
 */
var MatCheckboxBase = (function () {
    function MatCheckboxBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatCheckboxBase;
}());
var _MatCheckboxMixinBase = _angular_material_core.mixinTabIndex(_angular_material_core.mixinColor(_angular_material_core.mixinDisableRipple(_angular_material_core.mixinDisabled(MatCheckboxBase)), 'accent'));
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://www.google.com/design/spec/components/selection-controls.html
 */
var MatCheckbox = (function (_super) {
    __extends(MatCheckbox, _super);
    function MatCheckbox(elementRef, _changeDetectorRef, _focusMonitor, tabIndex, _clickAction) {
        var _this = _super.call(this, elementRef) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._focusMonitor = _focusMonitor;
        _this._clickAction = _clickAction;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will
         * take precedence so this may be omitted.
         */
        _this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        _this.ariaLabelledby = null;
        _this._uniqueId = "mat-checkbox-" + ++nextUniqueId;
        /**
         * A unique id for the checkbox input. If none is supplied, it will be auto-generated.
         */
        _this.id = _this._uniqueId;
        /**
         * Whether the label should appear after or before the checkbox. Defaults to 'after'
         */
        _this.labelPosition = 'after';
        /**
         * Name value will be applied to the input element if present
         */
        _this.name = null;
        /**
         * Event emitted when the checkbox's `checked` value changes.
         */
        _this.change = new _angular_core.EventEmitter();
        /**
         * Event emitted when the checkbox's `indeterminate` value changes.
         */
        _this.indeterminateChange = new _angular_core.EventEmitter();
        /**
         * Ripple configuration for the mouse ripples and focus indicators.
         */
        _this._rippleConfig = { centered: true, radius: 25, speedFactor: 1.5 };
        /**
         * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
         * \@docs-private
         */
        _this.onTouched = function () { };
        _this._currentAnimationClass = '';
        _this._currentCheckState = TransitionCheckState.Init;
        _this._checked = false;
        _this._indeterminate = false;
        _this._controlValueAccessorChangeFn = function () { };
        _this.tabIndex = parseInt(tabIndex) || 0;
        return _this;
    }
    Object.defineProperty(MatCheckbox.prototype, "inputId", {
        /** Returns the unique id for the visual hidden input. */
        get: /**
         * Returns the unique id for the visual hidden input.
         * @return {?}
         */
        function () { return (this.id || this._uniqueId) + "-input"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCheckbox.prototype, "required", {
        get: /**
         * Whether the checkbox is required.
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._required = _angular_cdk_coercion.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCheckbox.prototype, "align", {
        get: /**
         * Whether or not the checkbox should appear before or after the label.
         * @deprecated
         * @return {?}
         */
        function () {
            // align refers to the checkbox relative to the label, while labelPosition refers to the
            // label relative to the checkbox. As such, they are inverted.
            return this.labelPosition == 'after' ? 'start' : 'end';
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.labelPosition = (v == 'start') ? 'after' : 'before';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatCheckbox.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._focusMonitor
            .monitor(this._inputElement.nativeElement, false)
            .subscribe(function (focusOrigin) { return _this._onInputFocusChange(focusOrigin); });
    };
    /**
     * @return {?}
     */
    MatCheckbox.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._inputElement.nativeElement);
    };
    Object.defineProperty(MatCheckbox.prototype, "checked", {
        get: /**
         * Whether the checkbox is checked.
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            if (checked != this.checked) {
                this._checked = checked;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCheckbox.prototype, "indeterminate", {
        get: /**
         * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
         * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
         * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
         * set to false.
         * @return {?}
         */
        function () {
            return this._indeterminate;
        },
        set: /**
         * @param {?} indeterminate
         * @return {?}
         */
        function (indeterminate) {
            var /** @type {?} */ changed = indeterminate != this._indeterminate;
            this._indeterminate = indeterminate;
            if (changed) {
                if (this._indeterminate) {
                    this._transitionCheckState(TransitionCheckState.Indeterminate);
                }
                else {
                    this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
                }
                this.indeterminateChange.emit(this._indeterminate);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatCheckbox.prototype._isRippleDisabled = /**
     * @return {?}
     */
    function () {
        return this.disableRipple || this.disabled;
    };
    /** Method being called whenever the label text changes. */
    /**
     * Method being called whenever the label text changes.
     * @return {?}
     */
    MatCheckbox.prototype._onLabelTextChange = /**
     * Method being called whenever the label text changes.
     * @return {?}
     */
    function () {
        // This method is getting called whenever the label of the checkbox changes.
        // Since the checkbox uses the OnPush strategy we need to notify it about the change
        // that has been recognized by the cdkObserveContent directive.
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value Value to be set to the model.
     * @return {?}
     */
    MatCheckbox.prototype.writeValue = /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value Value to be set to the model.
     * @return {?}
     */
    function (value) {
        this.checked = !!value;
    };
    /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param fn Function to be called on change.
     */
    /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Function to be called on change.
     * @return {?}
     */
    MatCheckbox.prototype.registerOnChange = /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Function to be called on change.
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a callback to be triggered when the control has been touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    /**
     * Registers a callback to be triggered when the control has been touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be triggered when the checkbox is touched.
     * @return {?}
     */
    MatCheckbox.prototype.registerOnTouched = /**
     * Registers a callback to be triggered when the control has been touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be triggered when the checkbox is touched.
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Sets the checkbox's disabled state. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the checkbox should be disabled.
     */
    /**
     * Sets the checkbox's disabled state. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the checkbox should be disabled.
     * @return {?}
     */
    MatCheckbox.prototype.setDisabledState = /**
     * Sets the checkbox's disabled state. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the checkbox should be disabled.
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    MatCheckbox.prototype._getAriaChecked = /**
     * @return {?}
     */
    function () {
        return this.checked ? 'true' : (this.indeterminate ? 'mixed' : 'false');
    };
    /**
     * @param {?} newState
     * @return {?}
     */
    MatCheckbox.prototype._transitionCheckState = /**
     * @param {?} newState
     * @return {?}
     */
    function (newState) {
        var /** @type {?} */ oldState = this._currentCheckState;
        var /** @type {?} */ element = this._elementRef.nativeElement;
        if (oldState === newState) {
            return;
        }
        if (this._currentAnimationClass.length > 0) {
            element.classList.remove(this._currentAnimationClass);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
            element.classList.add(this._currentAnimationClass);
        }
    };
    /**
     * @return {?}
     */
    MatCheckbox.prototype._emitChangeEvent = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ event = new MatCheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    };
    /**
     * Function is called whenever the focus changes for the input element.
     * @param {?} focusOrigin
     * @return {?}
     */
    MatCheckbox.prototype._onInputFocusChange = /**
     * Function is called whenever the focus changes for the input element.
     * @param {?} focusOrigin
     * @return {?}
     */
    function (focusOrigin) {
        if (!this._focusRipple && focusOrigin === 'keyboard') {
            this._focusRipple = this._ripple.launch(0, 0, __assign({ persistent: true }, this._rippleConfig));
        }
        else if (!focusOrigin) {
            this._removeFocusRipple();
            this.onTouched();
        }
    };
    /** Toggles the `checked` state of the checkbox. */
    /**
     * Toggles the `checked` state of the checkbox.
     * @return {?}
     */
    MatCheckbox.prototype.toggle = /**
     * Toggles the `checked` state of the checkbox.
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
    };
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param event
     */
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param {?} event
     * @return {?}
     */
    MatCheckbox.prototype._onInputClick = /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `checkbox` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
        // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
        if (!this.disabled && this._clickAction !== 'noop') {
            // When user manually click on the checkbox, `indeterminate` is set to false.
            if (this.indeterminate && this._clickAction !== 'check') {
                Promise.resolve().then(function () {
                    _this._indeterminate = false;
                    _this.indeterminateChange.emit(_this._indeterminate);
                });
            }
            this.toggle();
            this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
        else if (!this.disabled && this._clickAction === 'noop') {
            // Reset native input when clicked with noop. The native checkbox becomes checked after
            // click, reset it to be align with `checked` value of `mat-checkbox`.
            this._inputElement.nativeElement.checked = this.checked;
            this._inputElement.nativeElement.indeterminate = this.indeterminate;
        }
    };
    /** Focuses the checkbox. */
    /**
     * Focuses the checkbox.
     * @return {?}
     */
    MatCheckbox.prototype.focus = /**
     * Focuses the checkbox.
     * @return {?}
     */
    function () {
        this._focusMonitor.focusVia(this._inputElement.nativeElement, 'keyboard');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatCheckbox.prototype._onInteractionEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
    };
    /**
     * @param {?} oldState
     * @param {?} newState
     * @return {?}
     */
    MatCheckbox.prototype._getAnimationClassForCheckStateTransition = /**
     * @param {?} oldState
     * @param {?} newState
     * @return {?}
     */
    function (oldState, newState) {
        var /** @type {?} */ animSuffix = '';
        switch (oldState) {
            case TransitionCheckState.Init:
                // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                // [checked] bound to it.
                if (newState === TransitionCheckState.Checked) {
                    animSuffix = 'unchecked-checked';
                }
                else if (newState == TransitionCheckState.Indeterminate) {
                    animSuffix = 'unchecked-indeterminate';
                }
                else {
                    return '';
                }
                break;
            case TransitionCheckState.Unchecked:
                animSuffix = newState === TransitionCheckState.Checked ?
                    'unchecked-checked' : 'unchecked-indeterminate';
                break;
            case TransitionCheckState.Checked:
                animSuffix = newState === TransitionCheckState.Unchecked ?
                    'checked-unchecked' : 'checked-indeterminate';
                break;
            case TransitionCheckState.Indeterminate:
                animSuffix = newState === TransitionCheckState.Checked ?
                    'indeterminate-checked' : 'indeterminate-unchecked';
                break;
        }
        return "mat-checkbox-anim-" + animSuffix;
    };
    /**
     * Fades out the focus state ripple.
     * @return {?}
     */
    MatCheckbox.prototype._removeFocusRipple = /**
     * Fades out the focus state ripple.
     * @return {?}
     */
    function () {
        if (this._focusRipple) {
            this._focusRipple.fadeOut();
            this._focusRipple = null;
        }
    };
    MatCheckbox.decorators = [
        { type: _angular_core.Component, args: [{selector: 'mat-checkbox',
                    template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label><div class=\"mat-checkbox-inner-container\" [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\"><input #input class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\" [id]=\"inputId\" [required]=\"required\" [checked]=\"checked\" [attr.value]=\"value\" [disabled]=\"disabled\" [attr.name]=\"name\" [tabIndex]=\"tabIndex\" [indeterminate]=\"indeterminate\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" [attr.aria-checked]=\"_getAriaChecked()\" (change)=\"_onInteractionEvent($event)\" (click)=\"_onInputClick($event)\"><div matRipple class=\"mat-checkbox-ripple\" [matRippleTrigger]=\"label\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleRadius]=\"_rippleConfig.radius\" [matRippleSpeedFactor]=\"_rippleConfig.speedFactor\" [matRippleCentered]=\"_rippleConfig.centered\"></div><div class=\"mat-checkbox-frame\"></div><div class=\"mat-checkbox-background\"><svg version=\"1.1\" focusable=\"false\" class=\"mat-checkbox-checkmark\" viewBox=\"0 0 24 24\" xml:space=\"preserve\"><path class=\"mat-checkbox-checkmark-path\" fill=\"none\" stroke=\"white\" d=\"M4.1,12.7 9,17.6 20.3,6.3\"/></svg><div class=\"mat-checkbox-mixedmark\"></div></div></div><span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\"><span style=\"display:none\">&nbsp;</span><ng-content></ng-content></span></label>",
                    styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-checkmark,.mat-checkbox-mixedmark{width:calc(100% - 4px)}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer}.mat-checkbox-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-inner-container{display:inline-block;height:20px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:20px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.66667px}.mat-checkbox-mixedmark{height:2px;opacity:0;transform:scaleX(0) rotate(0)}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox-ripple{position:absolute;left:-15px;top:-15px;height:50px;width:50px;z-index:1;pointer-events:none}"],
                    exportAs: 'matCheckbox',
                    host: {
                        'class': 'mat-checkbox',
                        '[id]': 'id',
                        '[class.mat-checkbox-indeterminate]': 'indeterminate',
                        '[class.mat-checkbox-checked]': 'checked',
                        '[class.mat-checkbox-disabled]': 'disabled',
                        '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
                    },
                    providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                    inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MatCheckbox.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_cdk_a11y.FocusMonitor, },
        { type: undefined, decorators: [{ type: _angular_core.Attribute, args: ['tabindex',] },] },
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MAT_CHECKBOX_CLICK_ACTION,] },] },
    ]; };
    MatCheckbox.propDecorators = {
        "ariaLabel": [{ type: _angular_core.Input, args: ['aria-label',] },],
        "ariaLabelledby": [{ type: _angular_core.Input, args: ['aria-labelledby',] },],
        "id": [{ type: _angular_core.Input },],
        "required": [{ type: _angular_core.Input },],
        "align": [{ type: _angular_core.Input },],
        "labelPosition": [{ type: _angular_core.Input },],
        "name": [{ type: _angular_core.Input },],
        "change": [{ type: _angular_core.Output },],
        "indeterminateChange": [{ type: _angular_core.Output },],
        "value": [{ type: _angular_core.Input },],
        "_inputElement": [{ type: _angular_core.ViewChild, args: ['input',] },],
        "_ripple": [{ type: _angular_core.ViewChild, args: [_angular_material_core.MatRipple,] },],
        "checked": [{ type: _angular_core.Input },],
        "indeterminate": [{ type: _angular_core.Input },],
    };
    return MatCheckbox;
}(_MatCheckboxMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return MatCheckboxRequiredValidator; }),
    multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
var MatCheckboxRequiredValidator = (function (_super) {
    __extends(MatCheckboxRequiredValidator, _super);
    function MatCheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatCheckboxRequiredValidator.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: "mat-checkbox[required][formControlName],\n             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]",
                    providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR],
                    host: { '[attr.required]': 'required ? "" : null' }
                },] },
    ];
    /** @nocollapse */
    MatCheckboxRequiredValidator.ctorParameters = function () { return []; };
    return MatCheckboxRequiredValidator;
}(_angular_forms.CheckboxRequiredValidator));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatCheckboxModule = (function () {
    function MatCheckboxModule() {
    }
    MatCheckboxModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [_angular_common.CommonModule, _angular_material_core.MatRippleModule, _angular_material_core.MatCommonModule, _angular_cdk_observers.ObserversModule, _angular_cdk_a11y.A11yModule],
                    exports: [MatCheckbox, MatCheckboxRequiredValidator, _angular_material_core.MatCommonModule],
                    declarations: [MatCheckbox, MatCheckboxRequiredValidator],
                },] },
    ];
    /** @nocollapse */
    MatCheckboxModule.ctorParameters = function () { return []; };
    return MatCheckboxModule;
}());

exports.MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR;
exports.TransitionCheckState = TransitionCheckState;
exports.MatCheckboxChange = MatCheckboxChange;
exports.MatCheckboxBase = MatCheckboxBase;
exports._MatCheckboxMixinBase = _MatCheckboxMixinBase;
exports.MatCheckbox = MatCheckbox;
exports.MAT_CHECKBOX_CLICK_ACTION = MAT_CHECKBOX_CLICK_ACTION;
exports.MatCheckboxModule = MatCheckboxModule;
exports.MAT_CHECKBOX_REQUIRED_VALIDATOR = MAT_CHECKBOX_REQUIRED_VALIDATOR;
exports.MatCheckboxRequiredValidator = MatCheckboxRequiredValidator;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-checkbox.umd.js.map
