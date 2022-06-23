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
 * @interface RegionLived
 */
export interface RegionLived {
    /**
     * 
     * @type {number}
     * @memberof RegionLived
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof RegionLived
     */
    readonly name: string;
    /**
     * 
     * @type {number}
     * @memberof RegionLived
     */
    readonly user: number;
    /**
     * 
     * @type {number}
     * @memberof RegionLived
     */
    region: number;
}

export function RegionLivedFromJSON(json: any): RegionLived {
    return RegionLivedFromJSONTyped(json, false);
}

export function RegionLivedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegionLived {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'user': json['user'],
        'region': json['region'],
    };
}

export function RegionLivedToJSON(value?: RegionLived | null): any {
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

