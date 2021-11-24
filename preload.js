// const cp = require('child_process') //调用系统命令 cp.exec('notepad');
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
    }
    // ,
    // "mute": {
    //     mode: "none",
    //     args: {
    //         enter: (action) => {
    //             window.utools.hideMainWindow();
    //             // utools.simulateKeyboardTap("VolumeMute"); //静音
    //             cp.exec('setvol 10');
    //             alert(2333);
    //             window.utools.outPlugin();
    //         }
    //     }
    // }
    // ,
    // "sound": {
    //     mode: 'list',
    //     args: {
    //         placeholder: "输入数字,调整音量 0-100",
    //         enter: (action) => {
    //         }
    //     }
    // }
}