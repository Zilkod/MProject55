/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/core'), require('@angular/cdk/bidi')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/material/core', '@angular/cdk/bidi'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.gridList = global.ng.material.gridList || {}),global.ng.core,global.ng.material.core,global.ng.cdk.bidi));
}(this, (function (exports,_angular_core,_angular_material_core,_angular_cdk_bidi) { 'use strict';

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Converts values into strings. Falsy values become empty strings.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function coerceToString(value) {
    return "" + (value || '');
}
/**
 * Converts a value that might be a string into a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function coerceToNumber(value) {
    return typeof value === 'string' ? parseInt(value, 10) : value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatGridTile = (function () {
    function MatGridTile(_element) {
        this._element = _element;
        this._rowspan = 1;
        this._colspan = 1;
    }
    Object.defineProperty(MatGridTile.prototype, "rowspan", {
        get: /**
         * Amount of rows that the grid tile takes up.
         * @return {?}
         */
        function () { return this._rowspan; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._rowspan = coerceToNumber(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridTile.prototype, "colspan", {
        get: /**
         * Amount of columns that the grid tile takes up.
         * @return {?}
         */
        function () { return this._colspan; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._colspan = coerceToNumber(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    MatGridTile.prototype._setStyle = /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    function (property, value) {
        this._element.nativeElement.style[property] = value;
    };
    MatGridTile.decorators = [
        { type: _angular_core.Component, args: [{selector: 'mat-grid-tile',
                    exportAs: 'matGridTile',
                    host: {
                        'class': 'mat-grid-tile',
                    },
                    template: "<figure class=\"mat-figure\"><ng-content></ng-content></figure>",
                    styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MatGridTile.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
    ]; };
    MatGridTile.propDecorators = {
        "rowspan": [{ type: _angular_core.Input },],
        "colspan": [{ type: _angular_core.Input },],
    };
    return MatGridTile;
}());
var MatGridTileText = (function () {
    function MatGridTileText(_element) {
        this._element = _element;
    }
    /**
     * @return {?}
     */
    MatGridTileText.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._lineSetter = new _angular_material_core.MatLineSetter(this._lines, this._element);
    };
    MatGridTileText.decorators = [
        { type: _angular_core.Component, args: [{selector: 'mat-grid-tile-header, mat-grid-tile-footer',
                    template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content><div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div><ng-content></ng-content>",
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    MatGridTileText.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
    ]; };
    MatGridTileText.propDecorators = {
        "_lines": [{ type: _angular_core.ContentChildren, args: [_angular_material_core.MatLine,] },],
    };
    return MatGridTileText;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatGridAvatarCssMatStyler = (function () {
    function MatGridAvatarCssMatStyler() {
    }
    MatGridAvatarCssMatStyler.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[mat-grid-avatar], [matGridAvatar]',
                    host: { 'class': 'mat-grid-avatar' }
                },] },
    ];
    /** @nocollapse */
    MatGridAvatarCssMatStyler.ctorParameters = function () { return []; };
    return MatGridAvatarCssMatStyler;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatGridTileHeaderCssMatStyler = (function () {
    function MatGridTileHeaderCssMatStyler() {
    }
    MatGridTileHeaderCssMatStyler.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: 'mat-grid-tile-header',
                    host: { 'class': 'mat-grid-tile-header' }
                },] },
    ];
    /** @nocollapse */
    MatGridTileHeaderCssMatStyler.ctorParameters = function () { return []; };
    return MatGridTileHeaderCssMatStyler;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatGridTileFooterCssMatStyler = (function () {
    function MatGridTileFooterCssMatStyler() {
    }
    MatGridTileFooterCssMatStyler.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: 'mat-grid-tile-footer',
                    host: { 'class': 'mat-grid-tile-footer' }
                },] },
    ];
    /** @nocollapse */
    MatGridTileFooterCssMatStyler.ctorParameters = function () { return []; };
    return MatGridTileFooterCssMatStyler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * \@docs-private
 */
var TileCoordinator = (function () {
    function TileCoordinator(numColumns, tiles) {
        var _this = this;
        /**
         * Index at which the search for the next gap will start.
         */
        this.columnIndex = 0;
        /**
         * The current row index.
         */
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map(function (tile) { return _this._trackTile(tile); });
    }
    Object.defineProperty(TileCoordinator.prototype, "rowCount", {
        /** Gets the total number of rows occupied by tiles */
        get: /**
         * Gets the total number of rows occupied by tiles
         * @return {?}
         */
        function () { return this.rowIndex + 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileCoordinator.prototype, "rowspan", {
        /** Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2. */
        get: /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         * @return {?}
         */
        function () {
            var /** @type {?} */ lastRowMax = Math.max.apply(Math, this.tracker);
            // if any of the tiles has a rowspan that pushes it beyond the total row count,
            // add the difference to the rowcount
            return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Calculates the row and col position of a tile.
     * @param {?} tile
     * @return {?}
     */
    TileCoordinator.prototype._trackTile = /**
     * Calculates the row and col position of a tile.
     * @param {?} tile
     * @return {?}
     */
    function (tile) {
        // Find a gap large enough for this tile.
        var /** @type {?} */ gapStartIndex = this._findMatchingGap(tile.colspan);
        // Place tile in the resulting gap.
        this._markTilePosition(gapStartIndex, tile);
        // The next time we look for a gap, the search will start at columnIndex, which should be
        // immediately after the tile that has just been placed.
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
    };
    /**
     * Finds the next available space large enough to fit the tile.
     * @param {?} tileCols
     * @return {?}
     */
    TileCoordinator.prototype._findMatchingGap = /**
     * Finds the next available space large enough to fit the tile.
     * @param {?} tileCols
     * @return {?}
     */
    function (tileCols) {
        if (tileCols > this.tracker.length) {
            throw Error("mat-grid-list: tile with colspan " + tileCols + " is wider than " +
                ("grid with cols=\"" + this.tracker.length + "\"."));
        }
        // Start index is inclusive, end index is exclusive.
        var /** @type {?} */ gapStartIndex = -1;
        var /** @type {?} */ gapEndIndex = -1;
        // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
        do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();
                continue;
            }
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            // If there are no more empty spaces in this row at all, move on to the next row.
            if (gapStartIndex == -1) {
                this._nextRow();
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.
            this.columnIndex = gapStartIndex + 1;
            // Continue iterating until we find a gap wide enough for this tile.
        } while (gapEndIndex - gapStartIndex < tileCols);
        return gapStartIndex;
    };
    /**
     * Move "down" to the next row.
     * @return {?}
     */
    TileCoordinator.prototype._nextRow = /**
     * Move "down" to the next row.
     * @return {?}
     */
    function () {
        this.columnIndex = 0;
        this.rowIndex++;
        // Decrement all spaces by one to reflect moving down one row.
        for (var /** @type {?} */ i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
    };
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     * @param {?} gapStartIndex
     * @return {?}
     */
    TileCoordinator.prototype._findGapEndIndex = /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     * @param {?} gapStartIndex
     * @return {?}
     */
    function (gapStartIndex) {
        for (var /** @type {?} */ i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        // The gap ends with the end of the row.
        return this.tracker.length;
    };
    /**
     * Update the tile tracker to account for the given tile in the given space.
     * @param {?} start
     * @param {?} tile
     * @return {?}
     */
    TileCoordinator.prototype._markTilePosition = /**
     * Update the tile tracker to account for the given tile in the given space.
     * @param {?} start
     * @param {?} tile
     * @return {?}
     */
    function (start, tile) {
        for (var /** @type {?} */ i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    };
    return TileCoordinator;
}());
/**
 * Simple data structure for tile position (row, col).
 * \@docs-private
 */
var TilePosition = (function () {
    function TilePosition(row, col) {
        this.row = row;
        this.col = col;
    }
    return TilePosition;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * \@docs-private
 * @abstract
 */
var TileStyler = (function () {
    function TileStyler() {
        this._rows = 0;
        this._rowspan = 0;
    }
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param gutterSize Size of the grid's gutter.
     * @param tracker Instance of the TileCoordinator.
     * @param cols Amount of columns in the grid.
     * @param direction Layout direction of the grid.
     */
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param {?} gutterSize Size of the grid's gutter.
     * @param {?} tracker Instance of the TileCoordinator.
     * @param {?} cols Amount of columns in the grid.
     * @param {?} direction Layout direction of the grid.
     * @return {?}
     */
    TileStyler.prototype.init = /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param {?} gutterSize Size of the grid's gutter.
     * @param {?} tracker Instance of the TileCoordinator.
     * @param {?} cols Amount of columns in the grid.
     * @param {?} direction Layout direction of the grid.
     * @return {?}
     */
    function (gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
    };
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    TileStyler.prototype.getBaseTileSize = /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    function (sizePercent, gutterFraction) {
        // Take the base size percent (as would be if evenly dividing the size between cells),
        // and then subtracting the size of one gutter. However, since there are no gutters on the
        // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
        // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
        // edge evenly among the cells).
        return "(" + sizePercent + "% - (" + this._gutterSize + " * " + gutterFraction + "))";
    };
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} offset Number of tiles that have already been rendered in the row/column.
     * @return {?} Position of the tile as a CSS calc() expression.
     */
    TileStyler.prototype.getTilePosition = /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} offset Number of tiles that have already been rendered in the row/column.
     * @return {?} Position of the tile as a CSS calc() expression.
     */
    function (baseSize, offset) {
        // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
        // row/column (offset).
        return offset === 0 ? '0' : calc("(" + baseSize + " + " + this._gutterSize + ") * " + offset);
    };
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} span The tile's rowspan or colspan.
     * @return {?} Size of the tile as a CSS calc() expression.
     */
    TileStyler.prototype.getTileSize = /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} span The tile's rowspan or colspan.
     * @return {?} Size of the tile as a CSS calc() expression.
     */
    function (baseSize, span) {
        return "(" + baseSize + " * " + span + ") + (" + (span - 1) + " * " + this._gutterSize + ")";
    };
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param tile Tile to which to apply the styling.
     * @param rowIndex Index of the tile's row.
     * @param colIndex Index of the tile's column.
     */
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param {?} tile Tile to which to apply the styling.
     * @param {?} rowIndex Index of the tile's row.
     * @param {?} colIndex Index of the tile's column.
     * @return {?}
     */
    TileStyler.prototype.setStyle = /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param {?} tile Tile to which to apply the styling.
     * @param {?} rowIndex Index of the tile's row.
     * @param {?} colIndex Index of the tile's column.
     * @return {?}
     */
    function (tile, rowIndex, colIndex) {
        // Percent of the available horizontal space that one column takes up.
        var /** @type {?} */ percentWidthPerTile = 100 / this._cols;
        // Fraction of the vertical gutter size that each column takes up.
        // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
        var /** @type {?} */ gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    };
    /** Sets the horizontal placement of the tile in the list. */
    /**
     * Sets the horizontal placement of the tile in the list.
     * @param {?} tile
     * @param {?} colIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
    TileStyler.prototype.setColStyles = /**
     * Sets the horizontal placement of the tile in the list.
     * @param {?} tile
     * @param {?} colIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
    function (tile, colIndex, percentWidth, gutterWidth) {
        // Base horizontal size of a column.
        var /** @type {?} */ baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        // The width and horizontal position of each tile is always calculated the same way, but the
        // height and vertical position depends on the rowMode.
        var /** @type {?} */ side = this._direction === 'ltr' ? 'left' : 'right';
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
    };
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     */
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     * @return {?}
     */
    TileStyler.prototype.getGutterSpan = /**
     * Calculates the total size taken up by gutters across one axis of a list.
     * @return {?}
     */
    function () {
        return this._gutterSize + " * (" + this._rowspan + " - 1)";
    };
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param tileHeight Height of the tile.
     */
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param {?} tileHeight Height of the tile.
     * @return {?}
     */
    TileStyler.prototype.getTileSpan = /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param {?} tileHeight Height of the tile.
     * @return {?}
     */
    function (tileHeight) {
        return this._rowspan + " * " + this.getTileSize(tileHeight, 1);
    };
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * @docs-private
     */
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * \@docs-private
     * @return {?}
     */
    TileStyler.prototype.getComputedHeight = /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * \@docs-private
     * @return {?}
     */
    function () { return null; };
    return TileStyler;
}());
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example <mat-grid-list cols="3" rowHeight="100px">
 * \@docs-private
 */
var FixedTileStyler = (function (_super) {
    __extends(FixedTileStyler, _super);
    function FixedTileStyler(fixedRowHeight) {
        var _this = _super.call(this) || this;
        _this.fixedRowHeight = fixedRowHeight;
        return _this;
    }
    /**
     * @param {?} gutterSize
     * @param {?} tracker
     * @param {?} cols
     * @param {?} direction
     * @return {?}
     */
    FixedTileStyler.prototype.init = /**
     * @param {?} gutterSize
     * @param {?} tracker
     * @param {?} cols
     * @param {?} direction
     * @return {?}
     */
    function (gutterSize, tracker, cols, direction) {
        _super.prototype.init.call(this, gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
    };
    /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
    FixedTileStyler.prototype.setRowStyles = /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
    function (tile, rowIndex) {
        tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
    };
    /**
     * @return {?}
     */
    FixedTileStyler.prototype.getComputedHeight = /**
     * @return {?}
     */
    function () {
        return [
            'height', calc(this.getTileSpan(this.fixedRowHeight) + " + " + this.getGutterSpan())
        ];
    };
    /**
     * @param {?} list
     * @return {?}
     */
    FixedTileStyler.prototype.reset = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        list._setListStyle(['height', null]);
        list._tiles.forEach(function (tile) {
            tile._setStyle('top', null);
            tile._setStyle('height', null);
        });
    };
    return FixedTileStyler;
}(TileStyler));
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example <mat-grid-list cols="3" rowHeight="3:1">
 * \@docs-private
 */
var RatioTileStyler = (function (_super) {
    __extends(RatioTileStyler, _super);
    function RatioTileStyler(value) {
        var _this = _super.call(this) || this;
        _this._parseRatio(value);
        return _this;
    }
    /**
     * @param {?} tile
     * @param {?} rowIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
    RatioTileStyler.prototype.setRowStyles = /**
     * @param {?} tile
     * @param {?} rowIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
    function (tile, rowIndex, percentWidth, gutterWidth) {
        var /** @type {?} */ percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        // Use padding-top and margin-top to maintain the given aspect ratio, as
        // a percentage-based value for these properties is applied versus the *width* of the
        // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
        tile._setStyle('margin-top', this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle('padding-top', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
    };
    /**
     * @return {?}
     */
    RatioTileStyler.prototype.getComputedHeight = /**
     * @return {?}
     */
    function () {
        return [
            'padding-bottom', calc(this.getTileSpan(this.baseTileHeight) + " + " + this.getGutterSpan())
        ];
    };
    /**
     * @param {?} list
     * @return {?}
     */
    RatioTileStyler.prototype.reset = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        list._setListStyle(['padding-bottom', null]);
        list._tiles.forEach(function (tile) {
            tile._setStyle('margin-top', null);
            tile._setStyle('padding-top', null);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatioTileStyler.prototype._parseRatio = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ ratioParts = value.split(':');
        if (ratioParts.length !== 2) {
            throw Error("mat-grid-list: invalid ratio given for row-height: \"" + value + "\"");
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
    };
    return RatioTileStyler;
}(TileStyler));
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example <mat-grid-list cols="3" rowHeight="fit">
 *
 * \@docs-private
 */
var FitTileStyler = (function (_super) {
    __extends(FitTileStyler, _super);
    function FitTileStyler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
    FitTileStyler.prototype.setRowStyles = /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
    function (tile, rowIndex) {
        // Percent of the available vertical space that one row takes up.
        var /** @type {?} */ percentHeightPerTile = 100 / this._rowspan;
        // Fraction of the horizontal gutter size that each column takes up.
        var /** @type {?} */ gutterHeightPerTile = (this._rows - 1) / this._rows;
        // Base vertical size of a column.
        var /** @type {?} */ baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
    };
    /**
     * @param {?} list
     * @return {?}
     */
    FitTileStyler.prototype.reset = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        list._tiles.forEach(function (tile) {
            tile._setStyle('top', null);
            tile._setStyle('height', null);
        });
    };
    return FitTileStyler;
}(TileStyler));
/**
 * Wraps a CSS string in a calc function
 * @param {?} exp
 * @return {?}
 */
function calc(exp) { return "calc(" + exp + ")"; }
/**
 * Appends pixels to a CSS string if no units are given.
 * @param {?} value
 * @return {?}
 */
function normalizeUnits(value) {
    return (value.match(/px|em|rem/)) ? value : value + 'px';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
var MAT_FIT_MODE = 'fit';
var MatGridList = (function () {
    function MatGridList(_element, _dir) {
        this._element = _element;
        this._dir = _dir;
        /**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */
        this._gutter = '1px';
    }
    Object.defineProperty(MatGridList.prototype, "cols", {
        get: /**
         * Amount of columns in the grid list.
         * @return {?}
         */
        function () { return this._cols; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._cols = coerceToNumber(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridList.prototype, "gutterSize", {
        get: /**
         * Size of the grid list's gutter in pixels.
         * @return {?}
         */
        function () { return this._gutter; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._gutter = coerceToString(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridList.prototype, "rowHeight", {
        set: /**
         * Set internal representation of row height from the user-provided value.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ newValue = coerceToString(value);
            if (newValue !== this._rowHeight) {
                this._rowHeight = newValue;
                this._setTileStyler(this._rowHeight);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatGridList.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._checkCols();
        this._checkRowHeight();
    };
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     * @return {?}
     */
    MatGridList.prototype.ngAfterContentChecked = /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     * @return {?}
     */
    function () {
        this._layoutTiles();
    };
    /**
     * Throw a friendly error if cols property is missing
     * @return {?}
     */
    MatGridList.prototype._checkCols = /**
     * Throw a friendly error if cols property is missing
     * @return {?}
     */
    function () {
        if (!this.cols) {
            throw Error("mat-grid-list: must pass in number of columns. " +
                "Example: <mat-grid-list cols=\"3\">");
        }
    };
    /**
     * Default to equal width:height if rowHeight property is missing
     * @return {?}
     */
    MatGridList.prototype._checkRowHeight = /**
     * Default to equal width:height if rowHeight property is missing
     * @return {?}
     */
    function () {
        if (!this._rowHeight) {
            this._setTileStyler('1:1');
        }
    };
    /**
     * Creates correct Tile Styler subtype based on rowHeight passed in by user
     * @param {?} rowHeight
     * @return {?}
     */
    MatGridList.prototype._setTileStyler = /**
     * Creates correct Tile Styler subtype based on rowHeight passed in by user
     * @param {?} rowHeight
     * @return {?}
     */
    function (rowHeight) {
        if (this._tileStyler) {
            this._tileStyler.reset(this);
        }
        if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(rowHeight);
        }
    };
    /**
     * Computes and applies the size and position for all children grid tiles.
     * @return {?}
     */
    MatGridList.prototype._layoutTiles = /**
     * Computes and applies the size and position for all children grid tiles.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ tracker = new TileCoordinator(this.cols, this._tiles);
        var /** @type {?} */ direction = this._dir ? this._dir.value : 'ltr';
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        this._tiles.forEach(function (tile, index) {
            var /** @type {?} */ pos = tracker.positions[index];
            _this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
    };
    /** Sets style on the main grid-list element, given the style name and value. */
    /**
     * Sets style on the main grid-list element, given the style name and value.
     * @param {?} style
     * @return {?}
     */
    MatGridList.prototype._setListStyle = /**
     * Sets style on the main grid-list element, given the style name and value.
     * @param {?} style
     * @return {?}
     */
    function (style) {
        if (style) {
            this._element.nativeElement.style[style[0]] = style[1];
        }
    };
    MatGridList.decorators = [
        { type: _angular_core.Component, args: [{selector: 'mat-grid-list',
                    exportAs: 'matGridList',
                    template: "<div><ng-content></ng-content></div>",
                    styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],
                    host: {
                        'class': 'mat-grid-list',
                    },
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    MatGridList.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_cdk_bidi.Directionality, decorators: [{ type: _angular_core.Optional },] },
    ]; };
    MatGridList.propDecorators = {
        "_tiles": [{ type: _angular_core.ContentChildren, args: [MatGridTile,] },],
        "cols": [{ type: _angular_core.Input },],
        "gutterSize": [{ type: _angular_core.Input },],
        "rowHeight": [{ type: _angular_core.Input },],
    };
    return MatGridList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatGridListModule = (function () {
    function MatGridListModule() {
    }
    MatGridListModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [_angular_material_core.MatLineModule, _angular_material_core.MatCommonModule],
                    exports: [
                        MatGridList,
                        MatGridTile,
                        MatGridTileText,
                        _angular_material_core.MatLineModule,
                        _angular_material_core.MatCommonModule,
                        MatGridTileHeaderCssMatStyler,
                        MatGridTileFooterCssMatStyler,
                        MatGridAvatarCssMatStyler
                    ],
                    declarations: [
                        MatGridList,
                        MatGridTile,
                        MatGridTileText,
                        MatGridTileHeaderCssMatStyler,
                        MatGridTileFooterCssMatStyler,
                        MatGridAvatarCssMatStyler
                    ],
                },] },
    ];
    /** @nocollapse */
    MatGridListModule.ctorParameters = function () { return []; };
    return MatGridListModule;
}());

exports.MatGridListModule = MatGridListModule;
exports.MatGridList = MatGridList;
exports.MatGridTile = MatGridTile;
exports.MatGridTileText = MatGridTileText;
exports.MatGridAvatarCssMatStyler = MatGridAvatarCssMatStyler;
exports.MatGridTileHeaderCssMatStyler = MatGridTileHeaderCssMatStyler;
exports.MatGridTileFooterCssMatStyler = MatGridTileFooterCssMatStyler;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-grid-list.umd.js.map
