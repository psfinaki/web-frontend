/* tslint:disable */
/* eslint-disable */
/**
 * Couchers API
 * Couchers API documentation
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchedRegionLived
 */
export interface PatchedRegionLived {
    /**
     * 
     * @type {number}
     * @memberof PatchedRegionLived
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedRegionLived
     */
    readonly name?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedRegionLived
     */
    readonly user?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRegionLived
     */
    region?: number;
}

export function PatchedRegionLivedFromJSON(json: any): PatchedRegionLived {
    return PatchedRegionLivedFromJSONTyped(json, false);
}

export function PatchedRegionLivedFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedRegionLived {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'region': !exists(json, 'region') ? undefined : json['region'],
    };
}

export function PatchedRegionLivedToJSON(value?: PatchedRegionLived | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'region': value.region,
    };
}

