
const canvas = document.getElementById('canvas');

//アプリケーションを作成
const app = new PIXI.Application({
    view: canvas,
    width: window.innerWidth, //canvas横幅
    height: window.innerHeight,  //canvas縦幅
    backgroundColor: 0X000000, //背景色
    autoResize: true,//リサイズ処理
});

//画像の読み込み
const texture = PIXI.Texture.fromImage("../dest/assets/images/girl.jpg");
//読み込んだ画像からスプライト(画像)を生成
const img = new PIXI.Sprite(texture);

// //スプライトの位置を設定する
img.x = app.screen.width / 2;
img.y = app.screen.height / 2;
//アンカーポイントを中央に設定する
img.anchor.x = 0.5;
img.anchor.y = 0.5;
// img.anchor.set(0.5);//アンカーポイントのx,yを中央に設定する
//スプライトの大きさを調整する
img.scale.x = 0.5;
img.scale.y = 0.5;

//画像をステージに追加
app.stage.addChild(img);

// ディスプレイスメントフィルターをかける
const displacementFilter = new PIXI.filters.DisplacementFilter(PIXI.Sprite.fromImage("../dest/assets/images/noise.jpg"));
displacementFilter.scale.x = 0;
displacementFilter.scale.y = 0;

//フィルターの配列をimgに追加
img.filters = [displacementFilter];

//imgのインタラクションをオン
img.interactive = true;

//マウスオーバーしたら1.5秒かけてスケールを拡大にする
img.on('mouseover', function () {

    TweenMax.to(
        displacementFilter.scale,
        2,
        { x: 200, y: -300, ease: Expo.easeOut });

});

// マウスアウトしたら1.5秒かけてスケールを元に戻す
img.on('mouseout', function () {

    TweenMax.to(
        displacementFilter.scale,
        2,
        { x: 20, y: 20, ease: Expo.easeOut });

});


app.ticker.add(animate);

function animate() {

}
