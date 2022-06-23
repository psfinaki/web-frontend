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
 * @interface DiscussionSubscription
 */
export interface DiscussionSubscription {
    /**
     * 
     * @type {number}
     * @memberof DiscussionSubscription
     */
    readonly id: number;
    /**
     * 
     * @type {Date}
     * @memberof DiscussionSubscription
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof DiscussionSubscription
     */
    readonly deletedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof DiscussionSubscription
     */
    readonly user: number;
    /**
     * 
     * @type {number}
     * @memberof DiscussionSubscription
     */
    readonly discussion: number;
}

export function DiscussionSubscriptionFromJSON(json: any): DiscussionSubscription {
    return DiscussionSubscriptionFromJSONTyped(json, false);
}

export function DiscussionSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscussionSubscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'deletedAt': (new Date(json['deleted_at'])),
        'user': json['user'],
        'discussion': json['discussion'],
    };
}

export function DiscussionSubscriptionToJSON(value?: DiscussionSubscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

