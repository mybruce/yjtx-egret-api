/**
 * Created by yjtx on 16/2/24.
 */

module yjtx {
    export class CA {
        static eventPool:CA[];

        a1:Array<CA>;

        a2:Array<A | number>;

        b: CA | number | string;
        c1:(p1:number, p2:string)=>number;

        c2:(p1:number, p2:string)=>A|boolean;

        c3:(p1:number, p2:string)=>{a:(p1:number, p2:string)=>number|A};

        c3:(p1:(p1:number|A, p2:string)=>number|A, p2:string)=>A|boolean;


        skins1: { [component: string]: string };
        skins2: { component: string };

        //EventClass<T>:{new (type:string | A, bubbles?:boolean|string, cancelable?:boolean): T};



        constructor(type:string | A, bubbles?:boolean|string, cancelable?:boolean) {

        }

        public static createT<T>(EventClass:{new (type:string | A, bubbles?:boolean|string, cancelable?:boolean): T}){

        }

        public static create<T>(EventClass:{new (type:string | A, bubbles?:boolean|string, cancelable?:boolean): T; eventPool?:A[]},
                                              type:string, bubbles?:boolean, cancelable?:boolean):T {

            return new EventClass(type, bubbles, cancelable);
        }
    }


    export interface B {
        name:string;
        isFile:boolean;


        new (a:number, b:number);

        (source: string, subString: string): boolean;

    }

    export class B1 implements B {

        constructor(a:number, b:number) {

        }

        name:string;
        isFile:boolean;
    }

    export interface BB extends B {

        b1:boolean;

        fb:(b:B) => B;
    }

    export interface A {
        [key:string]:B;

        d:{[key:string]:A};

        a:boolean;
    }

    export interface CCC extends A, BB {
        c:string;
    }

    export const enum BitmapKeys {
        bitmapData,
        image,
        bitmapX,
        bitmapY,
        bitmapWidth
    }
    
    /**
    * 摄像机类型
    * @version Egret 3.0
    * @platform Web,Native
    */
    export enum CameraType {

        /**
        * 透视投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        perspective,

        /**
        * 正交投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        orthogonal,

        /**
        * VR投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        VR
    };

    /**
    * VR类型
    * @version Egret 3.0
    * @platform Web,Native
    */
    export enum VRType {

        /**
        * 左眼
        * @version Egret 3.0
        * @platform Web,Native
        */
        left,

        /**
        * 右眼
        * @version Egret 3.0
        * @platform Web,Native
        */
        right
    };
    //var a:AAA;
    //var b = a["test"].isFile;

}


