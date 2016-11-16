var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_blime_sit_lowest","sep",
"test_bist_baby_distractor","sep",
"test_tace_dial_lowest","sep",
"test_tula_mommy_target","sep",
"test_tula_here_lowest","sep",
"test_jair_open_highest","sep",
"test_mipen_look_highest","sep",
"test_jair_time_target","sep",
"test_bist_horse_target","sep",
"test_zant_book_target","sep",
"test_mipen_cup_lowest","sep",
"test_telpen_watch_highest","sep",
"test_vash_open_distractor","sep",
"test_telpen_certain_distractor","sep",
"test_geck_mom_target","sep",
"test_geck_baby_highest","sep",
"test_tace_look_highest","sep",
"test_zant_good_lowest","sep",
"test_tiz_look_highest","sep",
"test_jair_oops_lowest","sep",
"test_blime_pass_distractor","sep",
"test_telpen_what_lowest","sep",
"test_telpen_ball_target","sep",
"test_doon_dial_lowest_filler","sep",
"test_bist_come_highest","sep",
"test_bist_go_lowest","sep",
"test_tula_look_distractor","sep",
"test_tiz_come_distractor","sep",
"test_mipen_bag_target","sep",
"test_zant_town_distractor","sep",
"test_vash_shoe_target","sep",
"test_doon_necklace_target","sep",
"test_mipen_force_distractor","sep",
"test_blime_look_highest","sep",
"test_tiz_thing_target","sep",
"test_tace_alone_distractor","sep",
"test_tula_come_highest","sep",
"test_jair_how_distractor","sep",
"test_doon_look_highest","sep",
"test_tace_phone_target","sep",
"test_geck_watch_distractor","sep",
"test_blime_toy_target","sep",
"test_geck_still_lowest","sep",
"test_doon_summer_distractor","sep",
"test_zant_come_highest","sep",
"test_vash_plug_lowest","sep",
"test_tiz_stair_lowest","sep",
"test_vash_look_highest","outro1","sr","outro2"
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

["test_tula_come_highest", "Form", { 
html: {include: "test_tula_come_highest.html"} 
}],

["test_tula_here_lowest", "Form", { 
html: {include: "test_tula_here_lowest.html"} 
}],

["test_tula_look_distractor", "Form", { 
html: {include: "test_tula_look_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_look_highest", "Form", { 
html: {include: "test_vash_look_highest.html"} 
}],

["test_vash_plug_lowest", "Form", { 
html: {include: "test_vash_plug_lowest.html"} 
}],

["test_vash_open_distractor", "Form", { 
html: {include: "test_vash_open_distractor.html"} 
}],

["test_geck_mom_target", "Form", { 
html: {include: "test_geck_mom_target.html"} 
}],

["test_geck_baby_highest", "Form", { 
html: {include: "test_geck_baby_highest.html"} 
}],

["test_geck_still_lowest", "Form", { 
html: {include: "test_geck_still_lowest.html"} 
}],

["test_geck_watch_distractor", "Form", { 
html: {include: "test_geck_watch_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_look_highest", "Form", { 
html: {include: "test_tiz_look_highest.html"} 
}],

["test_tiz_stair_lowest", "Form", { 
html: {include: "test_tiz_stair_lowest.html"} 
}],

["test_tiz_come_distractor", "Form", { 
html: {include: "test_tiz_come_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_go_lowest", "Form", { 
html: {include: "test_bist_go_lowest.html"} 
}],

["test_bist_baby_distractor", "Form", { 
html: {include: "test_bist_baby_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_open_highest", "Form", { 
html: {include: "test_jair_open_highest.html"} 
}],

["test_jair_oops_lowest", "Form", { 
html: {include: "test_jair_oops_lowest.html"} 
}],

["test_jair_how_distractor", "Form", { 
html: {include: "test_jair_how_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_look_highest", "Form", { 
html: {include: "test_tace_look_highest.html"} 
}],

["test_tace_dial_lowest", "Form", { 
html: {include: "test_tace_dial_lowest.html"} 
}],

["test_tace_alone_distractor", "Form", { 
html: {include: "test_tace_alone_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_look_highest", "Form", { 
html: {include: "test_doon_look_highest.html"} 
}],

["test_doon_dial_lowest_filler", "Form", { 
html: {include: "test_doon_dial_lowest_filler.html"} 
}],

["test_doon_summer_distractor", "Form", { 
html: {include: "test_doon_summer_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_watch_highest", "Form", { 
html: {include: "test_telpen_watch_highest.html"} 
}],

["test_telpen_what_lowest", "Form", { 
html: {include: "test_telpen_what_lowest.html"} 
}],

["test_telpen_certain_distractor", "Form", { 
html: {include: "test_telpen_certain_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_look_highest", "Form", { 
html: {include: "test_blime_look_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_pass_distractor", "Form", { 
html: {include: "test_blime_pass_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_come_highest", "Form", { 
html: {include: "test_zant_come_highest.html"} 
}],

["test_zant_good_lowest", "Form", { 
html: {include: "test_zant_good_lowest.html"} 
}],

["test_zant_town_distractor", "Form", { 
html: {include: "test_zant_town_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_look_highest", "Form", { 
html: {include: "test_mipen_look_highest.html"} 
}],

["test_mipen_cup_lowest", "Form", { 
html: {include: "test_mipen_cup_lowest.html"} 
}],

["test_mipen_force_distractor", "Form", { 
html: {include: "test_mipen_force_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];