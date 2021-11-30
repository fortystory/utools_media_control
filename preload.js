const cp = require('child_process') //调用系统命令 cp.exec('notepad');
const loudness = require('loudness')


window.exports = {
    "next": { // 注意：键对应的是 plugin.json 中的 features.code
        mode: "none", // 用于无需 UI 显示，执行一些简单的代码
        args: {
            // 进入插件时调用
            enter: (action) => {
                // action = { code, type, payload }
                window.utools.hideMainWindow();
                // do some thing

                // utools.simulateKeyboardTap("MediaPlayPause"); //暂停
                // utools.simulateKeyboardTap("MediaPreviousTrack"); //上一曲
                utools.simulateKeyboardTap("MediaNextTrack"); //下一曲
                window.utools.outPlugin();
            }
        }
    },
    "previous": {
        mode: "none",
        args: {
            enter: (action) => {
                window.utools.hideMainWindow();
                utools.simulateKeyboardTap("MediaPreviousTrack"); //上一曲
                window.utools.outPlugin();
            }
        }
    },
    "pause": {
        mode: "none",
        args: {
            enter: (action) => {
                window.utools.hideMainWindow();
                utools.simulateKeyboardTap("MediaPlayPause"); //暂停
                window.utools.outPlugin();
            }
        }
    },
    "volumeup": {
        mode: "none",
        args: {
            enter: (action) => {
                window.utools.hideMainWindow();
                utools.simulateKeyboardTap("VolumeUp"); //音量加
                window.utools.outPlugin();
            }
        }
    },
    "volumedown": {
        mode: "none",
        args: {
            enter: (action) => {
                window.utools.hideMainWindow();
                utools.simulateKeyboardTap("VolumeDown"); //音量减
                window.utools.outPlugin();
            }
        }
    },
    "mute": {
        mode: "none",
        args: {
            enter: (action) => {
                window.utools.hideMainWindow();
                utools.simulateKeyboardTap("VolumeMute"); //静音
                window.utools.outPlugin();
            }
        }
    },
    "sound": {
        mode: 'list',
        args: {
            // 进入插件时调用（可选）
            enter: (action, callbackSetList) => {
                // 如果进入插件就要显示列表数据
                callbackSetList([{
                    title: '调整音量',
                    description: '输入数字,调整音量 0-100',
                    icon: 'icons/Soundshengyin4.png' // 图标(可选)
                }])
            },
            // 子输入框内容变化时被调用 可选 (未设置则无搜索)
            search: (action, searchWord, callbackSetList) => {
                // 获取一些数据
                // 执行 callbackSetList 显示出来
                callbackSetList([{
                    title: '调整音量',
                    description: '调整为:' + searchWord,
                    sound_val: searchWord,
                    icon: 'icons/Soundshengyin4.png', // 图标
                    // url: 'https://yuanliao.info'
                }])
            },
            // 用户选择列表中某个条目时被调用
            select: (action, itemData, callbackSetList) => {
                window.utools.hideMainWindow();
                // let vol = await loudness.getVolume();
                let vol = loudness.getVolume();
                console.log(vol);

                utools.simulateKeyboardTap("VolumeUp");

                let sound_val = itemData.sound_val
                if (sound_val > 100) {
                    sound_val = 100;
                }
                if (sound_val < 0) {
                    sound_val = 0;
                }

                if (itemData.sound_val == 0) {
                    // utools.simulateKeyboardTap("VolumeMute");
                    cp.exec(loudness.setMuted(true));
                } else {
                    cp.exec(loudness.setVolume(sound_val));
                }
                window.utools.outPlugin();
            },
            // 子输入框为空时的占位符，默认为字符串"搜索"
            placeholder: "输入音量数值 0-100"
        }
    }
}