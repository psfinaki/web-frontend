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
import {
    RoleEnum,
    RoleEnumFromJSON,
    RoleEnumFromJSONTyped,
    RoleEnumToJSON,
} from './RoleEnum';

/**
 * 
 * @export
 * @interface PatchedGroupChatSubscription
 */
export interface PatchedGroupChatSubscription {
    /**
     * 
     * @type {number}
     * @memberof PatchedGroupChatSubscription
     */
    readonly id?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedGroupChatSubscription
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedGroupChatSubscription
     */
    leftAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchedGroupChatSubscription
     */
    unmuteAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof PatchedGroupChatSubscription
     */
    lastSeenMessageId?: number;
    /**
     * 
     * @type {RoleEnum}
     * @memberof PatchedGroupChatSubscription
     */
    role?: RoleEnum;
    /**
     * 
     * @type {number}
     * @memberof PatchedGroupChatSubscription
     */
    readonly user?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedGroupChatSubscription
     */
    readonly groupChat?: number;
}

export function PatchedGroupChatSubscriptionFromJSON(json: any): PatchedGroupChatSubscription {
    return PatchedGroupChatSubscriptionFromJSONTyped(json, false);
}

export function PatchedGroupChatSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedGroupChatSubscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'leftAt': !exists(json, 'left_at') ? undefined : (json['left_at'] === null ? null : new Date(json['left_at'])),
        'unmuteAt': !exists(json, 'unmute_at') ? undefined : (new Date(json['unmute_at'])),
        'lastSeenMessageId': !exists(json, 'last_seen_message_id') ? undefined : json['last_seen_message_id'],
        'role': !exists(json, 'role') ? undefined : RoleEnumFromJSON(json['role']),
        'user': !exists(json, 'user') ? undefined : json['user'],
        'groupChat': !exists(json, 'group_chat') ? undefined : json['group_chat'],
    };
}

export function PatchedGroupChatSubscriptionToJSON(value?: PatchedGroupChatSubscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'left_at': value.leftAt === undefined ? undefined : (value.leftAt === null ? null : value.leftAt.toISOString()),
        'unmute_at': value.unmuteAt === undefined ? undefined : (value.unmuteAt.toISOString()),
        'last_seen_message_id': value.lastSeenMessageId,
        'role': RoleEnumToJSON(value.role),
    };
}

