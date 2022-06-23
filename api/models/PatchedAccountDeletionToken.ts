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
 * @interface PatchedAccountDeletionToken
 */
export interface PatchedAccountDeletionToken {
    /**
     * 
     * @type {number}
     * @memberof PatchedAccountDeletionToken
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedAccountDeletionToken
     */
    token?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchedAccountDeletionToken
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedAccountDeletionToken
     */
    expiresAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof PatchedAccountDeletionToken
     */
    readonly user?: number;
}

export function PatchedAccountDeletionTokenFromJSON(json: any): PatchedAccountDeletionToken {
    return PatchedAccountDeletionTokenFromJSONTyped(json, false);
}

export function PatchedAccountDeletionTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedAccountDeletionToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'expiresAt': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function PatchedAccountDeletionTokenToJSON(value?: PatchedAccountDeletionToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
        'expires_at': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
    };
}

