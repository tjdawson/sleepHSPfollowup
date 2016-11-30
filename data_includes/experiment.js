var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_mipen_in_lowest","sep",
"test_blime_why_lowest","sep",
"test_mipen_put_highest","sep",
"test_geck_nose_target","sep",
"test_tiz_here_lowest","sep",
"test_geck_bye_lowest","sep",
"test_zant_light_highest","sep",
"test_jair_stand_highest","sep",
"test_vash_bag_highest","sep",
"test_jair_bag_distractor","sep",
"test_tiz_hurt_distractor","sep",
"test_zant_book_target","sep",
"test_tula_mommy_target","sep",
"test_vash_share_distractor","sep",
"test_tiz_thing_target","sep",
"test_jair_time_target","sep",
"test_doon_neck_lowest","sep",
"test_tace_phone_target","sep",
"test_zant_open_lowest","sep",
"test_tula_give_highest","sep",
"test_mipen_throw_distractor","sep",
"test_doon_necklace_target","sep",
"test_blime_share_highest","sep",
"test_blime_ball_distractor","sep",
"test_blime_toy_target","sep",
"test_bist_clean_distractor","sep",
"test_jair_fall_lowest","sep",
"test_geck_light_distractor","sep",
"test_telpen_give_distractor","sep",
"test_vash_sit_lowest","sep",
"test_tula_put_distractor","sep",
"test_doon_wheel_distractor","sep",
"test_mipen_bag_target","sep",
"test_bist_horse_target","sep",
"test_tace_stand_distractor","sep",
"test_telpen_ball_target","sep",
"test_tace_who_lowest","sep",
"test_doon_hurt_highest","sep",
"test_bist_here_lowest","sep",
"test_tace_ball_highest","sep",
"test_tula_hi_lowest","sep",
"test_telpen_throw_highest","sep",
"test_vash_shoe_target","sep",
"test_geck_clean_highest","sep",
"test_zant_stop_distractor","sep",
"test_bist_stop_highest","sep",
"test_telpen_toy_lowest","sep",
"test_tiz_wheel_highest","outro1","sr","outro2"
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

["test_tula_give_highest", "Form", { 
html: {include: "test_tula_give_highest.html"} 
}],

["test_tula_hi_lowest", "Form", { 
html: {include: "test_tula_hi_lowest.html"} 
}],

["test_tula_put_distractor", "Form", { 
html: {include: "test_tula_put_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bag_highest", "Form", { 
html: {include: "test_vash_bag_highest.html"} 
}],

["test_vash_sit_lowest", "Form", { 
html: {include: "test_vash_sit_lowest.html"} 
}],

["test_vash_share_distractor", "Form", { 
html: {include: "test_vash_share_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_clean_highest", "Form", { 
html: {include: "test_geck_clean_highest.html"} 
}],

["test_geck_bye_lowest", "Form", { 
html: {include: "test_geck_bye_lowest.html"} 
}],

["test_geck_light_distractor", "Form", { 
html: {include: "test_geck_light_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_wheel_highest", "Form", { 
html: {include: "test_tiz_wheel_highest.html"} 
}],

["test_tiz_here_lowest", "Form", { 
html: {include: "test_tiz_here_lowest.html"} 
}],

["test_tiz_hurt_distractor", "Form", { 
html: {include: "test_tiz_hurt_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_stop_highest", "Form", { 
html: {include: "test_bist_stop_highest.html"} 
}],

["test_bist_here_lowest", "Form", { 
html: {include: "test_bist_here_lowest.html"} 
}],

["test_bist_clean_distractor", "Form", { 
html: {include: "test_bist_clean_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_stand_highest", "Form", { 
html: {include: "test_jair_stand_highest.html"} 
}],

["test_jair_fall_lowest", "Form", { 
html: {include: "test_jair_fall_lowest.html"} 
}],

["test_jair_bag_distractor", "Form", { 
html: {include: "test_jair_bag_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_ball_highest", "Form", { 
html: {include: "test_tace_ball_highest.html"} 
}],

["test_tace_who_lowest", "Form", { 
html: {include: "test_tace_who_lowest.html"} 
}],

["test_tace_stand_distractor", "Form", { 
html: {include: "test_tace_stand_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_hurt_highest", "Form", { 
html: {include: "test_doon_hurt_highest.html"} 
}],

["test_doon_neck_lowest", "Form", { 
html: {include: "test_doon_neck_lowest.html"} 
}],

["test_doon_wheel_distractor", "Form", { 
html: {include: "test_doon_wheel_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_toy_lowest", "Form", { 
html: {include: "test_telpen_toy_lowest.html"} 
}],

["test_telpen_give_distractor", "Form", { 
html: {include: "test_telpen_give_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_share_highest", "Form", { 
html: {include: "test_blime_share_highest.html"} 
}],

["test_blime_why_lowest", "Form", { 
html: {include: "test_blime_why_lowest.html"} 
}],

["test_blime_ball_distractor", "Form", { 
html: {include: "test_blime_ball_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_light_highest", "Form", { 
html: {include: "test_zant_light_highest.html"} 
}],

["test_zant_open_lowest", "Form", { 
html: {include: "test_zant_open_lowest.html"} 
}],

["test_zant_stop_distractor", "Form", { 
html: {include: "test_zant_stop_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_put_highest", "Form", { 
html: {include: "test_mipen_put_highest.html"} 
}],

["test_mipen_in_lowest", "Form", { 
html: {include: "test_mipen_in_lowest.html"} 
}],

["test_mipen_throw_distractor", "Form", { 
html: {include: "test_mipen_throw_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];