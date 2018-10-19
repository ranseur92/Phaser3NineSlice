
declare module 'phaser3-nineslice' {
    class Plugin {
        static DefaultCfg: any;
    }
}

declare namespace Phaser {

    namespace NineSlice {
        class NineSlice extends Phaser.GameObjects.RenderTexture {
            updateSafeBounds(): void;
            initFrames(): void;
            getUsableBounds(): Phaser.Geom.Rectangle | null;
            drawFrames(): void;
            enableDebugDraw(enabled: boolean): void;
        }
        interface Frame {
            key: string;
            frame: number | string;
        }
    }

    namespace GameObjects {
        interface GameObjectFactory {

            /**
             * 
             * @param x 
             * @param y 
             * @param width 
             * @param height 
             * @param source 
             * @param corner number  | [topRightBottomLeft: number]  | [topBottom: number, rightLeft: number],  | [top: number, rightLeft: number, bottom: number],  | [top: number, right: number, bottom: number, left: number]
             * @param safeArea 
             */
            nineslice(
                x: number, 
                y: number, 
                width: number, 
                height: number, 
                source: string | NineSlice.Frame, 
                corner: Array<number> | number,
                safeArea?: Array<number> | number | null
            ): NineSlice.NineSlice;
        }
    }
}
