var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tace_look_lowest","sep",
"test_telpen_fetch_highest","sep",
"test_geck_look_lowest","sep",
"test_doon_necklace_target","sep",
"test_telpen_ball_target","sep",
"test_tula_mommy_target","sep",
"test_bist_come_highest","sep",
"test_vash_look_lowest","sep",
"test_geck_nose_target","sep",
"test_mipen_than_distractor","sep",
"test_tiz_look_highest","sep",
"test_jair_stay_lowest","sep",
"test_zant_take_lowest","sep",
"test_tula_give_lowest","sep",
"test_blime_take_lowest","sep",
"test_tace_phone_target","sep",
"test_jair_time_target","sep",
"test_zant_give_highest","sep",
"test_vash_shoe_target","sep",
"test_mipen_bag_target","sep",
"test_tiz_thing_target","sep",
"test_jair_eat_highest","sep",
"test_zant_tax_distractor","sep",
"test_blime_look_highest","sep",
"test_blime_toy_target","sep",
"test_bist_call_distractor","sep",
"test_tula_eat_distractor","sep",
"test_vash_fetch_distractor","sep",
"test_mipen_come_lowest","sep",
"test_geck_look_distractor","sep",
"test_jair_come_distractor","sep",
"test_tiz_hit_lowest","sep",
"test_zant_book_target","sep",
"test_mipen_take_highest","sep",
"test_tiz_give_distractor","sep",
"test_vash_come_highest","sep",
"test_tace_get_distractor","sep",
"test_telpen_building_distractor","sep",
"test_tace_call_highest","sep",
"test_tula_get_highest","sep",
"test_telpen_take_lowest","sep",
"test_bist_take_lowest","sep",
"test_bist_horse_target","sep",
"test_geck_come_highest","sep",
"test_doon_take_distractor","sep",
"test_doon_stop_lowest","sep",
"test_doon_fetch_highest","sep",
"test_blime_extend_distractor","outro1","sr","outro2"
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

["test_tula_get_highest", "Form", { 
html: {include: "test_tula_get_highest.html"} 
}],

["test_tula_give_lowest", "Form", { 
html: {include: "test_tula_give_lowest.html"} 
}],

["test_tula_eat_distractor", "Form", { 
html: {include: "test_tula_eat_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_come_highest", "Form", { 
html: {include: "test_vash_come_highest.html"} 
}],

["test_vash_look_lowest", "Form", { 
html: {include: "test_vash_look_lowest.html"} 
}],

["test_vash_fetch_distractor", "Form", { 
html: {include: "test_vash_fetch_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_come_highest", "Form", { 
html: {include: "test_geck_come_highest.html"} 
}],

["test_geck_look_lowest", "Form", { 
html: {include: "test_geck_look_lowest.html"} 
}],

["test_geck_look_distractor", "Form", { 
html: {include: "test_geck_look_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_look_highest", "Form", { 
html: {include: "test_tiz_look_highest.html"} 
}],

["test_tiz_hit_lowest", "Form", { 
html: {include: "test_tiz_hit_lowest.html"} 
}],

["test_tiz_give_distractor", "Form", { 
html: {include: "test_tiz_give_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_take_lowest", "Form", { 
html: {include: "test_bist_take_lowest.html"} 
}],

["test_bist_call_distractor", "Form", { 
html: {include: "test_bist_call_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_eat_highest", "Form", { 
html: {include: "test_jair_eat_highest.html"} 
}],

["test_jair_stay_lowest", "Form", { 
html: {include: "test_jair_stay_lowest.html"} 
}],

["test_jair_come_distractor", "Form", { 
html: {include: "test_jair_come_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_call_highest", "Form", { 
html: {include: "test_tace_call_highest.html"} 
}],

["test_tace_look_lowest", "Form", { 
html: {include: "test_tace_look_lowest.html"} 
}],

["test_tace_get_distractor", "Form", { 
html: {include: "test_tace_get_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_fetch_highest", "Form", { 
html: {include: "test_doon_fetch_highest.html"} 
}],

["test_doon_stop_lowest", "Form", { 
html: {include: "test_doon_stop_lowest.html"} 
}],

["test_doon_take_distractor", "Form", { 
html: {include: "test_doon_take_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_fetch_highest", "Form", { 
html: {include: "test_telpen_fetch_highest.html"} 
}],

["test_telpen_take_lowest", "Form", { 
html: {include: "test_telpen_take_lowest.html"} 
}],

["test_telpen_building_distractor", "Form", { 
html: {include: "test_telpen_building_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_look_highest", "Form", { 
html: {include: "test_blime_look_highest.html"} 
}],

["test_blime_take_lowest", "Form", { 
html: {include: "test_blime_take_lowest.html"} 
}],

["test_blime_extend_distractor", "Form", { 
html: {include: "test_blime_extend_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_give_highest", "Form", { 
html: {include: "test_zant_give_highest.html"} 
}],

["test_zant_take_lowest", "Form", { 
html: {include: "test_zant_take_lowest.html"} 
}],

["test_zant_tax_distractor", "Form", { 
html: {include: "test_zant_tax_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_take_highest", "Form", { 
html: {include: "test_mipen_take_highest.html"} 
}],

["test_mipen_come_lowest", "Form", { 
html: {include: "test_mipen_come_lowest.html"} 
}],

["test_mipen_than_distractor", "Form", { 
html: {include: "test_mipen_than_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];