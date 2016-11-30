var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tiz_stop_distractor","sep",
"test_telpen_okay_lowest","sep",
"test_vash_stuff_lowest","sep",
"test_jair_fall_highest","sep",
"test_blime_fall_distractor","sep",
"test_doon_music_lowest","sep",
"test_jair_time_target","sep",
"test_doon_necklace_target","sep",
"test_tula_sip_highest","sep",
"test_bist_horse_target","sep",
"test_geck_teeth_lowest","sep",
"test_geck_knock_distractor","sep",
"test_tiz_careful_lowest","sep",
"test_jair_clean%2c organize%2c play%2c mess_distractor","sep",
"test_tace_phone_target","sep",
"test_mipen_alone_distractor","sep",
"test_telpen_ball_target","sep",
"test_geck_momma_target","sep",
"test_mipen_plate_lowest","sep",
"test_doon_stop_highest","sep",
"test_telpen_up_highest","sep",
"test_zant_slow_lowest","sep",
"test_blime_up_highest","sep",
"test_tace_still_lowest","sep",
"test_jair_vroom_lowest","sep",
"test_tace_knock_highest","sep",
"test_zant_agreement_distractor","sep",
"test_tula_call_lowest","sep",
"test_blime_toy_target","sep",
"test_zant_book_target","sep",
"test_bist_up_highest","sep",
"test_bist_walk_distractor","sep",
"test_blime_oops_lowest","sep",
"test_tula_up_distractor","sep",
"test_vash_shoe_target","sep",
"test_vash_fill_highest","sep",
"test_tiz_head_highest","sep",
"test_tula_mommy_target","sep",
"test_tiz_thing_target","sep",
"test_geck_chew_highest","sep",
"test_telpen_sip_distractor","sep",
"test_vash_head_distractor","sep",
"test_mipen_telephone_target","sep",
"test_tace_chew_distractor","sep",
"test_bist_go_lowest","sep",
"test_mipen_clean%2c organize%2c play%2c mess_highest","sep",
"test_doon_fill_distractor","sep",
"test_zant_walk_highest","outro1","sr","outro2"
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

["test_tula_sip_highest", "Form", { 
html: {include: "test_tula_sip_highest.html"} 
}],

["test_tula_call_lowest", "Form", { 
html: {include: "test_tula_call_lowest.html"} 
}],

["test_tula_up_distractor", "Form", { 
html: {include: "test_tula_up_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_fill_highest", "Form", { 
html: {include: "test_vash_fill_highest.html"} 
}],

["test_vash_stuff_lowest", "Form", { 
html: {include: "test_vash_stuff_lowest.html"} 
}],

["test_vash_head_distractor", "Form", { 
html: {include: "test_vash_head_distractor.html"} 
}],

["test_geck_momma_target", "Form", { 
html: {include: "test_geck_momma_target.html"} 
}],

["test_geck_chew_highest", "Form", { 
html: {include: "test_geck_chew_highest.html"} 
}],

["test_geck_teeth_lowest", "Form", { 
html: {include: "test_geck_teeth_lowest.html"} 
}],

["test_geck_knock_distractor", "Form", { 
html: {include: "test_geck_knock_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_head_highest", "Form", { 
html: {include: "test_tiz_head_highest.html"} 
}],

["test_tiz_careful_lowest", "Form", { 
html: {include: "test_tiz_careful_lowest.html"} 
}],

["test_tiz_stop_distractor", "Form", { 
html: {include: "test_tiz_stop_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_up_highest", "Form", { 
html: {include: "test_bist_up_highest.html"} 
}],

["test_bist_go_lowest", "Form", { 
html: {include: "test_bist_go_lowest.html"} 
}],

["test_bist_walk_distractor", "Form", { 
html: {include: "test_bist_walk_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_fall_highest", "Form", { 
html: {include: "test_jair_fall_highest.html"} 
}],

["test_jair_vroom_lowest", "Form", { 
html: {include: "test_jair_vroom_lowest.html"} 
}],

["test_jair_clean%2c organize%2c play%2c mess_distractor", "Form", { 
html: {include: "test_jair_clean%2c organize%2c play%2c mess_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_knock_highest", "Form", { 
html: {include: "test_tace_knock_highest.html"} 
}],

["test_tace_still_lowest", "Form", { 
html: {include: "test_tace_still_lowest.html"} 
}],

["test_tace_chew_distractor", "Form", { 
html: {include: "test_tace_chew_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_stop_highest", "Form", { 
html: {include: "test_doon_stop_highest.html"} 
}],

["test_doon_music_lowest", "Form", { 
html: {include: "test_doon_music_lowest.html"} 
}],

["test_doon_fill_distractor", "Form", { 
html: {include: "test_doon_fill_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_up_highest", "Form", { 
html: {include: "test_telpen_up_highest.html"} 
}],

["test_telpen_okay_lowest", "Form", { 
html: {include: "test_telpen_okay_lowest.html"} 
}],

["test_telpen_sip_distractor", "Form", { 
html: {include: "test_telpen_sip_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_up_highest", "Form", { 
html: {include: "test_blime_up_highest.html"} 
}],

["test_blime_oops_lowest", "Form", { 
html: {include: "test_blime_oops_lowest.html"} 
}],

["test_blime_fall_distractor", "Form", { 
html: {include: "test_blime_fall_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_walk_highest", "Form", { 
html: {include: "test_zant_walk_highest.html"} 
}],

["test_zant_slow_lowest", "Form", { 
html: {include: "test_zant_slow_lowest.html"} 
}],

["test_zant_agreement_distractor", "Form", { 
html: {include: "test_zant_agreement_distractor.html"} 
}],

["test_mipen_telephone_target", "Form", { 
html: {include: "test_mipen_telephone_target.html"} 
}],

["test_mipen_clean%2c organize%2c play%2c mess_highest", "Form", { 
html: {include: "test_mipen_clean%2c organize%2c play%2c mess_highest.html"} 
}],

["test_mipen_plate_lowest", "Form", { 
html: {include: "test_mipen_plate_lowest.html"} 
}],

["test_mipen_alone_distractor", "Form", { 
html: {include: "test_mipen_alone_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];