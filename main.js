
let __main = function() {
    let images = {
        bullet: 'img/carrot.png',
        cloud: 'img/cloud.png',
        player: 'img/rabbit.png',
        start: 'img/start.png',
        sky: 'img/background.png',
        end: 'img/end.png',
        enemy0:'img/target0.png',
        enemy1:'img/enemy1.png',
        enemy2:'img/enemy2.png',
        enemy3:'img/enemy3.png',
        spark:'img/star.png',
        carrot:'img/get.png',
        enemy_bullet:'img/enemy_bullet.png',
    }

    //从配置文件生成html控件
    insertControls()
    //绑定事件
    bindEvents()
    let game = GuaGame.instance(30, images, function(g){
        // let s = Scene.new(g)
        let s = SceneTitle.new(g)
        g.runWithScene(s)
    })

}

__main()
