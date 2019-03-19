(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts-accounts-module"],{

/***/ "../node_modules/@ngrx/entity/fesm5/entity.js":
/*!****************************************************!*\
  !*** ../node_modules/@ngrx/entity/fesm5/entity.js ***!
  \****************************************************/
/*! exports provided: createEntityAdapter, Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/**
 * @license NgRx 7.0.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */



function getInitialEntityState() {
    return {
        ids: [],
        entities: {},
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}

function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, selectEntities, function (ids, entities) {
            return ids.map(function (id) { return entities[id]; });
        });
        var selectTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
            };
        }
        return {
            selectIds: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectIds),
            selectEntities: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectEntities),
            selectAll: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectAll),
            selectTotal: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectTotal),
        };
    }
    return { getSelectors: getSelectors };
}

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var DidMutate;
(function (DidMutate) {
    DidMutate[DidMutate["EntitiesOnly"] = 0] = "EntitiesOnly";
    DidMutate[DidMutate["Both"] = 1] = "Both";
    DidMutate[DidMutate["None"] = 2] = "None";
})(DidMutate || (DidMutate = {}));
function createStateOperator(mutator) {
    return function operation(arg, state) {
        var clonedEntityState = {
            ids: __spread(state.ids),
            entities: __assign({}, state.entities),
        };
        var didMutate = mutator(arg, clonedEntityState);
        if (didMutate === DidMutate.Both) {
            return Object.assign({}, state, clonedEntityState);
        }
        if (didMutate === DidMutate.EntitiesOnly) {
            return __assign({}, state, { entities: clonedEntityState.entities });
        }
        return state;
    };
}

function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && key === undefined) {
        console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
    }
    return key;
}

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return DidMutate.None;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
    }
    function addManyMutably(entities, state) {
        var e_1, _a;
        var didMutate = false;
        try {
            for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    function addAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return DidMutate.Both;
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keysOrPredicate, state) {
        var keys = keysOrPredicate instanceof Array
            ? keysOrPredicate
            : state.ids.filter(function (key) { return keysOrPredicate(state.entities[key]); });
        var didMutate = keys
            .filter(function (key) { return key in state.entities; })
            .map(function (key) { return delete state.entities[key]; }).length > 0;
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    function removeAll(state) {
        return Object.assign({}, state, {
            ids: [],
            entities: {},
        });
    }
    function takeNewKey(keys, update, state) {
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        updates = updates.filter(function (update) { return update.id in state.entities; });
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = state.ids.map(function (id) { return newKeys[id] || id; });
                return DidMutate.Both;
            }
            else {
                return DidMutate.EntitiesOnly;
            }
        }
        return DidMutate.None;
    }
    function mapMutably(map, state) {
        var changes = state.ids.reduce(function (changes, id) {
            var change = map(state.entities[id]);
            if (change !== state.entities[id]) {
                changes.push({ id: id, changes: change });
            }
            return changes;
        }, []);
        var updates = changes.filter(function (_a) {
            var id = _a.id;
            return id in state.entities;
        });
        return updateManyMutably(updates, state);
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        var e_2, _a;
        var added = [];
        var updated = [];
        try {
            for (var entities_2 = __values(entities), entities_2_1 = entities_2.next(); !entities_2_1.done; entities_2_1 = entities_2.next()) {
                var entity = entities_2_1.value;
                var id = selectIdValue(entity, selectId);
                if (id in state.entities) {
                    updated.push({ id: id, changes: entity });
                }
                else {
                    added.push(entity);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (entities_2_1 && !entities_2_1.done && (_a = entities_2.return)) _a.call(entities_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
    }
    return {
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        addAll: createStateOperator(addAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably),
        map: createStateOperator(mapMutably),
    };
}

var __values$1 = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function createSortedStateAdapter(selectId, sort) {
    var _a = createUnsortedStateAdapter(selectId), removeOne = _a.removeOne, removeMany = _a.removeMany, removeAll = _a.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newModels, state) {
        var models = newModels.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            merge(models, state);
            return DidMutate.Both;
        }
    }
    function addAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return DidMutate.Both;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
        var models = [];
        var didMutateIds = updates.filter(function (update) { return takeUpdatedModel(models, update, state); }).length >
            0;
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            var originalIds_1 = state.ids;
            var updatedIndexes_1 = [];
            state.ids = state.ids.filter(function (id, index) {
                if (id in state.entities) {
                    return true;
                }
                else {
                    updatedIndexes_1.push(index);
                    return false;
                }
            });
            merge(models, state);
            if (!didMutateIds &&
                updatedIndexes_1.every(function (i) { return state.ids[i] === originalIds_1[i]; })) {
                return DidMutate.EntitiesOnly;
            }
            else {
                return DidMutate.Both;
            }
        }
    }
    function mapMutably(updatesOrMap, state) {
        var updates = state.ids.reduce(function (changes, id) {
            var change = updatesOrMap(state.entities[id]);
            if (change !== state.entities[id]) {
                changes.push({ id: id, changes: change });
            }
            return changes;
        }, []);
        return updateManyMutably(updates, state);
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        var e_1, _a;
        var added = [];
        var updated = [];
        try {
            for (var entities_1 = __values$1(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                var id = selectIdValue(entity, selectId);
                if (id in state.entities) {
                    updated.push({ id: id, changes: entity });
                }
                else {
                    added.push(entity);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
    }
    function merge(models, state) {
        models.sort(sort);
        var ids = [];
        var i = 0;
        var j = 0;
        while (i < models.length && j < state.ids.length) {
            var model = models[i];
            var modelId = selectIdValue(model, selectId);
            var entityId = state.ids[j];
            var entity = state.entities[entityId];
            if (sort(model, entity) <= 0) {
                ids.push(modelId);
                i++;
            }
            else {
                ids.push(entityId);
                j++;
            }
        }
        if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
        }
        else {
            state.ids = ids.concat(state.ids.slice(j));
        }
        models.forEach(function (model, i) {
            state.entities[selectId(model)] = model;
        });
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        addAll: createStateOperator(addAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        map: createStateOperator(mapMutably),
    };
}

var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _a = __assign$1({ sortComparer: false, selectId: function (instance) { return instance.id; } }, options), selectId = _a.selectId, sortComparer = _a.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer
        ? createSortedStateAdapter(selectId, sortComparer)
        : createUnsortedStateAdapter(selectId);
    return __assign$1({ selectId: selectId,
        sortComparer: sortComparer }, stateFactory, selectorsFactory, stateAdapter);
}

var Dictionary = /** @class */ (function () {
    function Dictionary() {
    }
    return Dictionary;
}());

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=entity.js.map


/***/ }),

/***/ "./src/app/accounts/accounts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/accounts/accounts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AccountsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function() { return AccountsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/profile.component */ "./src/app/accounts/containers/profile.component.ts");
/* harmony import */ var _guards_profile_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/profile.guard */ "./src/app/accounts/guards/profile.guard.ts");
/* harmony import */ var _guards_browse_accounts_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/browse-accounts.guard */ "./src/app/accounts/guards/browse-accounts.guard.ts");
/* harmony import */ var _containers_accounts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/accounts.component */ "./src/app/accounts/containers/accounts.component.ts");







var routes = [
    { path: '', redirectTo: 'profile' },
    {
        path: 'profile',
        component: _containers_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        canActivate: [
            _guards_profile_guard__WEBPACK_IMPORTED_MODULE_4__["ProfileGuard"]
        ],
    },
    {
        path: 'browse',
        component: _containers_accounts_component__WEBPACK_IMPORTED_MODULE_6__["AccountsComponent"],
        canActivate: [
            _guards_browse_accounts_guard__WEBPACK_IMPORTED_MODULE_5__["BrowseAccountsGuard"]
        ]
    }
];
var AccountsRoutingModule = /** @class */ (function () {
    function AccountsRoutingModule() {
    }
    AccountsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountsRoutingModule);
    return AccountsRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/accounts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/accounts/accounts.module.ts ***!
  \*********************************************/
/*! exports provided: AccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/profile.component */ "./src/app/accounts/containers/profile.component.ts");
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accounts-routing.module */ "./src/app/accounts/accounts-routing.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects_profile_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effects/profile.effects */ "./src/app/accounts/effects/profile.effects.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers */ "./src/app/accounts/reducers/index.ts");
/* harmony import */ var _components_profile_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile-detail.component */ "./src/app/accounts/components/profile-detail.component.ts");
/* harmony import */ var _containers_accounts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/accounts.component */ "./src/app/accounts/containers/accounts.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");













var AccountsModule = /** @class */ (function () {
    function AccountsModule() {
    }
    AccountsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _containers_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
                _components_profile_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProfileDetailComponent"],
                _containers_accounts_component__WEBPACK_IMPORTED_MODULE_11__["AccountsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _accounts_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountsRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('accounts', _reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_effects_profile_effects__WEBPACK_IMPORTED_MODULE_8__["ProfileEffects"]]),
            ]
        })
    ], AccountsModule);
    return AccountsModule;
}());



/***/ }),

/***/ "./src/app/accounts/actions/accounts.action.ts":
/*!*****************************************************!*\
  !*** ./src/app/accounts/actions/accounts.action.ts ***!
  \*****************************************************/
/*! exports provided: AccountsActionTypes, GetAccountsSuccess, GetAccountsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsActionTypes", function() { return AccountsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAccountsSuccess", function() { return GetAccountsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAccountsFailure", function() { return GetAccountsFailure; });
var AccountsActionTypes;
(function (AccountsActionTypes) {
    AccountsActionTypes["GetAccountsSuccess"] = "[Accounts] Get Accounts Success";
    AccountsActionTypes["GetAccountsFailure"] = "[Accounts] Get Accounts Failure";
})(AccountsActionTypes || (AccountsActionTypes = {}));
var GetAccountsSuccess = /** @class */ (function () {
    function GetAccountsSuccess(payload) {
        this.payload = payload;
        this.type = AccountsActionTypes.GetAccountsSuccess;
    }
    return GetAccountsSuccess;
}());

var GetAccountsFailure = /** @class */ (function () {
    function GetAccountsFailure() {
        this.type = AccountsActionTypes.GetAccountsFailure;
    }
    return GetAccountsFailure;
}());



/***/ }),

/***/ "./src/app/accounts/actions/profile.action.ts":
/*!****************************************************!*\
  !*** ./src/app/accounts/actions/profile.action.ts ***!
  \****************************************************/
/*! exports provided: ProfileActionTypes, ProfileSuccess, ProfileFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileActionTypes", function() { return ProfileActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSuccess", function() { return ProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFailure", function() { return ProfileFailure; });
var ProfileActionTypes;
(function (ProfileActionTypes) {
    ProfileActionTypes["ProfileSuccess"] = "[Profile] Get Profile Success";
    ProfileActionTypes["ProfileFailure"] = "[Profile] Get Profile Failure";
})(ProfileActionTypes || (ProfileActionTypes = {}));
var ProfileSuccess = /** @class */ (function () {
    function ProfileSuccess(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.ProfileSuccess;
    }
    return ProfileSuccess;
}());

var ProfileFailure = /** @class */ (function () {
    function ProfileFailure() {
        this.type = ProfileActionTypes.ProfileFailure;
    }
    return ProfileFailure;
}());



/***/ }),

/***/ "./src/app/accounts/components/profile-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/accounts/components/profile-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailComponent", function() { return ProfileDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ProfileDetailComponent = /** @class */ (function () {
    function ProfileDetailComponent() {
    }
    Object.defineProperty(ProfileDetailComponent.prototype, "name", {
        get: function () {
            return this.profile.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileDetailComponent.prototype, "email", {
        get: function () {
            return this.profile.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileDetailComponent.prototype, "phone", {
        get: function () {
            return this.profile.phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileDetailComponent.prototype, "avatar", {
        get: function () {
            return this.profile.avatar;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileDetailComponent.prototype, "profile", void 0);
    ProfileDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-detail',
            template: "\n    <mat-card>\n      <mat-card-header>\n        <img mat-card-avatar src=\"{{avatar}}\">\n        <mat-card-title>{{name}}</mat-card-title>\n        <mat-card-subtitle>{{email}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p><span class=\"profile__label\">Phone: </span>{{phone}}</p>\n      </mat-card-content>\n    </mat-card>\n  ",
            styles: ["\n    mat-card {\n      margin: 0 15px 15px 0;\n      min-width: 270px;\n    }\n\n    .profile__label {\n      font-weight: 700;\n    }\n  "]
        })
    ], ProfileDetailComponent);
    return ProfileDetailComponent;
}());



/***/ }),

/***/ "./src/app/accounts/containers/accounts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/accounts/containers/accounts.component.ts ***!
  \***********************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/app/accounts/reducers/index.ts");




var AccountsComponent = /** @class */ (function () {
    function AccountsComponent(store) {
        this.store = store;
        this.accounts$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getAccounts"]));
    }
    AccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accounts',
            template: "\n    <app-page-header title=\"Accounts\"></app-page-header>\n    <app-page-container>\n      <app-profile-detail *ngFor=\"let account of (accounts$ | async)\" [profile]=\"account\"></app-profile-detail>\n    </app-page-container>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "./src/app/accounts/containers/profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/accounts/containers/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/app/accounts/reducers/index.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(store) {
        this.store = store;
        this.profile$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getProfile"]));
    }
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: "\n    <app-page-header title=\"My profile\"></app-page-header>\n    <app-page-container>\n      <app-profile-detail [profile]=\"profile$ | async\"></app-profile-detail>\n    </app-page-container>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/accounts/effects/profile.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/accounts/effects/profile.effects.ts ***!
  \*****************************************************/
/*! exports provided: ProfileEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return ProfileEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_profile_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/profile.action */ "./src/app/accounts/actions/profile.action.ts");
/* harmony import */ var _actions_accounts_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/accounts.action */ "./src/app/accounts/actions/accounts.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");







var ProfileEffects = /** @class */ (function () {
    function ProfileEffects(actions$) {
        this.actions$ = actions$;
        this.logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].Logout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return [
            new _actions_profile_action__WEBPACK_IMPORTED_MODULE_3__["ProfileFailure"](),
            new _actions_accounts_action__WEBPACK_IMPORTED_MODULE_4__["GetAccountsFailure"]()
        ]; }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileEffects.prototype, "logout$", void 0);
    ProfileEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], ProfileEffects);
    return ProfileEffects;
}());



/***/ }),

/***/ "./src/app/accounts/guards/browse-accounts.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/accounts/guards/browse-accounts.guard.ts ***!
  \**********************************************************/
/*! exports provided: BrowseAccountsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseAccountsGuard", function() { return BrowseAccountsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_accounts_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/accounts.action */ "./src/app/accounts/actions/accounts.action.ts");
/* harmony import */ var src_app_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var _services_browse_accounts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/browse-accounts.service */ "./src/app/accounts/services/browse-accounts.service.ts");









var BrowseAccountsGuard = /** @class */ (function () {
    function BrowseAccountsGuard(browseService, router, store) {
        this.browseService = browseService;
        this.router = router;
        this.store = store;
    }
    BrowseAccountsGuard.prototype.canActivate = function () {
        var _this = this;
        return this.browseService.getAllAccounts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) { return new _actions_accounts_action__WEBPACK_IMPORTED_MODULE_6__["GetAccountsSuccess"](users); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (action) { return _this.store.dispatch(action); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) { return !!users; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            if (error.status === 401) {
                _this.store.dispatch(new src_app_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["Logout"]());
            }
            else {
                _this.router.navigate(['/404']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
    };
    BrowseAccountsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_browse_accounts_service__WEBPACK_IMPORTED_MODULE_8__["BrowseAccountsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], BrowseAccountsGuard);
    return BrowseAccountsGuard;
}());



/***/ }),

/***/ "./src/app/accounts/guards/profile.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/accounts/guards/profile.guard.ts ***!
  \**************************************************/
/*! exports provided: ProfileGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGuard", function() { return ProfileGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/accounts/services/profile.service.ts");
/* harmony import */ var _actions_profile_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/profile.action */ "./src/app/accounts/actions/profile.action.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers */ "./src/app/accounts/reducers/index.ts");
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../auth/reducers */ "./src/app/auth/reducers/index.ts");
/* harmony import */ var src_app_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/auth/actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");











var ProfileGuard = /** @class */ (function () {
    function ProfileGuard(profileService, router, store) {
        this.profileService = profileService;
        this.router = router;
        this.store = store;
    }
    ProfileGuard.prototype.hasProfileInStore = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_8__["getAccountEntities"])), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_reducers__WEBPACK_IMPORTED_MODULE_9__["getUser"]))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var entities = _a[0], user = _a[1];
            return entities[user.id];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (profile) { return profile && _this.store.dispatch(new _actions_profile_action__WEBPACK_IMPORTED_MODULE_7__["ProfileSuccess"](profile)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (profile) { return !!profile; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    };
    ProfileGuard.prototype.hasProfileInApi = function () {
        var _this = this;
        return this.profileService.getMyProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (profile) { return new _actions_profile_action__WEBPACK_IMPORTED_MODULE_7__["ProfileSuccess"](profile); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (action) { return _this.store.dispatch(action); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (profile) { return !!profile; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            if (error.status === 401) {
                _this.store.dispatch(new src_app_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_10__["Logout"]());
            }
            else {
                _this.router.navigate(['/404']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
    };
    ProfileGuard.prototype.canActivate = function () {
        var _this = this;
        return this.hasProfileInStore().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (inStore) {
            return inStore
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(inStore)
                : _this.hasProfileInApi();
        }));
    };
    ProfileGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ProfileGuard);
    return ProfileGuard;
}());



/***/ }),

/***/ "./src/app/accounts/reducers/accounts.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/accounts/reducers/accounts.reducer.ts ***!
  \*******************************************************/
/*! exports provided: adapter, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "../node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions_accounts_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/accounts.action */ "./src/app/accounts/actions/accounts.action.ts");
/* harmony import */ var _actions_profile_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/profile.action */ "./src/app/accounts/actions/profile.action.ts");



var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: function (user) { return user.id; },
    sortComparer: false,
});
var initialState = adapter.getInitialState();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_accounts_action__WEBPACK_IMPORTED_MODULE_1__["AccountsActionTypes"].GetAccountsSuccess: {
            return adapter.addMany(action.payload, state);
        }
        case _actions_profile_action__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].ProfileSuccess: {
            return adapter.addOne(action.payload, state);
        }
        case _actions_profile_action__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].ProfileFailure: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/accounts/reducers/browse-accounts.reducer.ts":
/*!**************************************************************!*\
  !*** ./src/app/accounts/reducers/browse-accounts.reducer.ts ***!
  \**************************************************************/
/*! exports provided: initialState, reducer, getAccountsIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountsIds", function() { return getAccountsIds; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_accounts_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/accounts.action */ "./src/app/accounts/actions/accounts.action.ts");


var initialState = {
    ids: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_accounts_action__WEBPACK_IMPORTED_MODULE_1__["AccountsActionTypes"].GetAccountsSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ids: action.payload.map(function (user) { return user.id; }) });
        }
        case _actions_accounts_action__WEBPACK_IMPORTED_MODULE_1__["AccountsActionTypes"].GetAccountsFailure: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
var getAccountsIds = function (state) { return state.ids; };


/***/ }),

/***/ "./src/app/accounts/reducers/index.ts":
/*!********************************************!*\
  !*** ./src/app/accounts/reducers/index.ts ***!
  \********************************************/
/*! exports provided: reducers, selectAccountsState, getAccountEntitiesState, getAccountEntities, selectProfileState, getProfileId, getProfile, selectBrowseAccountsState, getAccountsIds, getAccounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAccountsState", function() { return selectAccountsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountEntitiesState", function() { return getAccountEntitiesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountEntities", function() { return getAccountEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProfileState", function() { return selectProfileState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileId", function() { return getProfileId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBrowseAccountsState", function() { return selectBrowseAccountsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountsIds", function() { return getAccountsIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccounts", function() { return getAccounts; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _profile_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.reducer */ "./src/app/accounts/reducers/profile.reducer.ts");
/* harmony import */ var _accounts_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts.reducer */ "./src/app/accounts/reducers/accounts.reducer.ts");
/* harmony import */ var _browse_accounts_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browse-accounts.reducer */ "./src/app/accounts/reducers/browse-accounts.reducer.ts");




var reducers = {
    accounts: _accounts_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    profile: _profile_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    browse: _browse_accounts_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]
};
var selectAccountsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('accounts');
var getAccountEntitiesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAccountsState, function (state) { return state.accounts; });
var getAccountEntities = _accounts_reducer__WEBPACK_IMPORTED_MODULE_2__["adapter"].getSelectors(getAccountEntitiesState).selectEntities;
var selectProfileState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAccountsState, function (state) { return state.profile; });
var getProfileId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProfileState, _profile_reducer__WEBPACK_IMPORTED_MODULE_1__["getProfileId"]);
var getProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAccountEntities, getProfileId, function (accounts, id) { return accounts[id]; });
var selectBrowseAccountsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAccountsState, function (state) { return state.browse; });
var getAccountsIds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBrowseAccountsState, _browse_accounts_reducer__WEBPACK_IMPORTED_MODULE_3__["getAccountsIds"]);
var getAccounts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAccountEntities, getAccountsIds, function (accounts, ids) { return ids.map(function (id) { return accounts[id]; }); });


/***/ }),

/***/ "./src/app/accounts/reducers/profile.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/accounts/reducers/profile.reducer.ts ***!
  \******************************************************/
/*! exports provided: initialState, reducer, getProfileId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileId", function() { return getProfileId; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_profile_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/profile.action */ "./src/app/accounts/actions/profile.action.ts");


var initialState = {
    id: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_profile_action__WEBPACK_IMPORTED_MODULE_1__["ProfileActionTypes"].ProfileSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { id: action.payload.id });
        }
        case _actions_profile_action__WEBPACK_IMPORTED_MODULE_1__["ProfileActionTypes"].ProfileFailure: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
var getProfileId = function (state) { return state.id; };


/***/ }),

/***/ "./src/app/accounts/services/browse-accounts.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/accounts/services/browse-accounts.service.ts ***!
  \**************************************************************/
/*! exports provided: BrowseAccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseAccountsService", function() { return BrowseAccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");




var BrowseAccountsService = /** @class */ (function () {
    function BrowseAccountsService(http) {
        this.http = http;
    }
    BrowseAccountsService.prototype.getAllAccounts = function () {
        return this.http.get(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"] + "/accounts");
    };
    BrowseAccountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BrowseAccountsService);
    return BrowseAccountsService;
}());



/***/ }),

/***/ "./src/app/accounts/services/profile.service.ts":
/*!******************************************************!*\
  !*** ./src/app/accounts/services/profile.service.ts ***!
  \******************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");




var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getMyProfile = function () {
        return this.http.get(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"] + "/profile");
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ })

}]);
//# sourceMappingURL=accounts-accounts-module.js.map