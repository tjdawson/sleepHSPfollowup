var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_blime_toy_target","sep",
"test_tace_sit_lowest_filler","sep",
"test_zant_open_distractor","sep",
"test_telpen_bag_distractor","sep",
"test_blime_cup_distractor","sep",
"test_zant_come_highest","sep",
"test_bist_come_lowest","sep",
"test_telpen_watch_highest","sep",
"test_blime_sit_lowest","sep",
"test_tace_drive_distractor","sep",
"test_tula_watch_distractor","sep",
"test_jair_open_highest","sep",
"test_zant_book_target","sep",
"test_tace_phone_target","sep",
"test_tula_mommy_target","sep",
"test_telpen_play_lowest","sep",
"test_tiz_toy_lowest","sep",
"test_doon_enough_distractor","sep",
"test_mipen_bag_target","sep",
"test_tiz_bag_highest","sep",
"test_doon_necklace_target","sep",
"test_doon_doll_highest","sep",
"test_telpen_ball_target","sep",
"test_geck_nose_target","sep",
"test_tiz_thing_target","sep",
"test_bist_doll_distractor","sep",
"test_vash_trunk_lowest","sep",
"test_bist_horse_target","sep",
"test_tula_enough_highest","sep",
"test_vash_shoe_target","sep",
"test_jair_sit_lowest","sep",
"test_tace_stop_highest","sep",
"test_zant_switch_lowest","sep",
"test_mipen_music_distractor","sep",
"test_geck_horse_highest","sep",
"test_vash_stop_distractor","sep",
"test_geck_come_distractor","sep",
"test_jair_time_target","sep",
"test_tiz_horse_distractor","sep",
"test_vash_teddy_highest","sep",
"test_doon_bead_lowest","sep",
"test_geck_blow_lowest","sep",
"test_mipen_purse_lowest","sep",
"test_blime_drive_highest","sep",
"test_mipen_cup_highest","sep",
"test_jair_teddy_distractor","sep",
"test_bist_come_highest","sep",
"test_tula_careful_lowest","outro1","sr","outro2"
);

var defaults = [
        "Separator", {
            transfer: "keypress",
            normalMessage: "Press any key to continue.",
            errorMessage: "Press any key to continue."
        },
        "DashedSentence", {
            mode: "self-paced reading"
        },
        "AcceptabilityJudgment", {
            as: ["1", "2", "3", "4", "5", "6", "7"],
            presentAsScale: true,
            instructions: "Use number keys or click boxes to answer.",
            leftComment: "(Bad)", rightComment: "(Good)"
        },
        "Question", {
            hasCorrect: true
        },
        "Message", {
            hideProgressBar: true
        },
        "Form", {
            hideProgressBar: false,
            continueOnReturn: true,
            saveReactionTime: false
        }
    ];

var items = [    ["sr", "__SendResults__", { }],
["sep", "Separator", { }],
        
        //
        
        ["intro", "Form", {
            html: {include: "intro.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }],
        
        //
        
        ["intro1", "Form", {
            html: {include: "intro1.html"},
            hideProgressBar: true,
            countsForProgressBar: false,
    validators: {
    audiotest: function(s)
    { if (s == "3401")
    return true; else return "Incorrect entry for \u2018test numbers\u2019";}
    }
        
        }],
        
        //
        
        ["outro1", "Form", {
            html: {include: "outro1.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }],
        
        //
        
        ["outro2", "Form", {
            html: { include: "outro2.html" },
            hideProgressBar: true,
            countsForProgressBar: false,
        } ],
        
        //
["test_tula_mommy_target", "Form", { 
html: {include: "test_tula_mommy_target.html"} 
}],

["test_tula_enough_highest", "Form", { 
html: {include: "test_tula_enough_highest.html"} 
}],

["test_tula_careful_lowest", "Form", { 
html: {include: "test_tula_careful_lowest.html"} 
}],

["test_tula_watch_distractor", "Form", { 
html: {include: "test_tula_watch_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_teddy_highest", "Form", { 
html: {include: "test_vash_teddy_highest.html"} 
}],

["test_vash_trunk_lowest", "Form", { 
html: {include: "test_vash_trunk_lowest.html"} 
}],

["test_vash_stop_distractor", "Form", { 
html: {include: "test_vash_stop_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_blow_lowest", "Form", { 
html: {include: "test_geck_blow_lowest.html"} 
}],

["test_geck_come_distractor", "Form", { 
html: {include: "test_geck_come_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_bag_highest", "Form", { 
html: {include: "test_tiz_bag_highest.html"} 
}],

["test_tiz_toy_lowest", "Form", { 
html: {include: "test_tiz_toy_lowest.html"} 
}],

["test_tiz_horse_distractor", "Form", { 
html: {include: "test_tiz_horse_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_come_lowest", "Form", { 
html: {include: "test_bist_come_lowest.html"} 
}],

["test_bist_doll_distractor", "Form", { 
html: {include: "test_bist_doll_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_open_highest", "Form", { 
html: {include: "test_jair_open_highest.html"} 
}],

["test_jair_sit_lowest", "Form", { 
html: {include: "test_jair_sit_lowest.html"} 
}],

["test_jair_teddy_distractor", "Form", { 
html: {include: "test_jair_teddy_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_stop_highest", "Form", { 
html: {include: "test_tace_stop_highest.html"} 
}],

["test_tace_sit_lowest_filler", "Form", { 
html: {include: "test_tace_sit_lowest_filler.html"} 
}],

["test_tace_drive_distractor", "Form", { 
html: {include: "test_tace_drive_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_doll_highest", "Form", { 
html: {include: "test_doon_doll_highest.html"} 
}],

["test_doon_bead_lowest", "Form", { 
html: {include: "test_doon_bead_lowest.html"} 
}],

["test_doon_enough_distractor", "Form", { 
html: {include: "test_doon_enough_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_watch_highest", "Form", { 
html: {include: "test_telpen_watch_highest.html"} 
}],

["test_telpen_play_lowest", "Form", { 
html: {include: "test_telpen_play_lowest.html"} 
}],

["test_telpen_bag_distractor", "Form", { 
html: {include: "test_telpen_bag_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_drive_highest", "Form", { 
html: {include: "test_blime_drive_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_cup_distractor", "Form", { 
html: {include: "test_blime_cup_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_come_highest", "Form", { 
html: {include: "test_zant_come_highest.html"} 
}],

["test_zant_switch_lowest", "Form", { 
html: {include: "test_zant_switch_lowest.html"} 
}],

["test_zant_open_distractor", "Form", { 
html: {include: "test_zant_open_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_cup_highest", "Form", { 
html: {include: "test_mipen_cup_highest.html"} 
}],

["test_mipen_purse_lowest", "Form", { 
html: {include: "test_mipen_purse_lowest.html"} 
}],

["test_mipen_music_distractor", "Form", { 
html: {include: "test_mipen_music_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];