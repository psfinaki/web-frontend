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
 * @interface ContentReport
 */
export interface ContentReport {
    /**
     * 
     * @type {number}
     * @memberof ContentReport
     */
    readonly id: number;
    /**
     * 
     * @type {Date}
     * @memberof ContentReport
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ContentReport
     */
    readonly reason: string;
    /**
     * 
     * @type {string}
     * @memberof ContentReport
     */
    readonly description: string;
    /**
     * 
     * @type {string}
     * @memberof ContentReport
     */
    readonly contentRef: string;
    /**
     * 
     * @type {string}
     * @memberof ContentReport
     */
    readonly userAgent: string;
    /**
     * 
     * @type {string}
     * @memberof ContentReport
     */
    readonly page: string;
    /**
     * 
     * @type {number}
     * @memberof ContentReport
     */
    readonly user: number;
    /**
     * 
     * @type {number}
     * @memberof ContentReport
     */
    readonly filedByUser: number;
}

export function ContentReportFromJSON(json: any): ContentReport {
    return ContentReportFromJSONTyped(json, false);
}

export function ContentReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentReport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'reason': json['reason'],
        'description': json['description'],
        'contentRef': json['content_ref'],
        'userAgent': json['user_agent'],
        'page': json['page'],
        'user': json['user'],
        'filedByUser': json['filed_by_user'],
    };
}

export function ContentReportToJSON(value?: ContentReport | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

