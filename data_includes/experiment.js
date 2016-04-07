var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tace_button_lowest","sep",
"test_bist_horse_target","sep",
"test_mipen_telephone_highest","sep",
"test_geck_clean_highest","sep",
"test_tula_outside_distractor","sep",
"test_tiz_throw_distractor","sep",
"test_mipen_inside_lowest","sep",
"test_telpen_ball_target","sep",
"test_bist_outside_highest","sep",
"test_zant_book_target","sep",
"test_doon_necklace_target","sep",
"test_tiz_thing_target","sep",
"test_jair_up_lowest","sep",
"test_tiz_bag_highest","sep",
"test_zant_throw_distractor","sep",
"test_telpen_throw_highest","sep",
"test_vash_bead_lowest","sep",
"test_bist_fun_lowest","sep",
"test_tula_share_highest","sep",
"test_geck_nose_target","sep",
"test_tula_mommy_target","sep",
"test_zant_come_lowest","sep",
"test_tace_phone_target","sep",
"test_doon_baby_lowest","sep",
"test_zant_light_highest","sep",
"test_bist_telephone_distractor","sep",
"test_geck_up_lowest","sep",
"test_vash_inside_highest","sep",
"test_tula_telephone_lowest","sep",
"test_geck_light_distractor","sep",
"test_blime_sit_lowest","sep",
"test_telpen_toy_lowest","sep",
"test_vash_telephone_distractor","sep",
"test_blime_inside_distractor","sep",
"test_jair_time_target","sep",
"test_jair_bead_highest","sep",
"test_doon_light_distractor","sep",
"test_mipen_share_distractor","sep",
"test_tiz_music_lowest","sep",
"test_tace_telephone_highest","sep",
"test_mipen_bag_target","sep",
"test_jair_outside_distractor","sep",
"test_blime_share_highest","sep",
"test_blime_toy_target","sep",
"test_tace_light_distractor","sep",
"test_telpen_inside_distractor","sep",
"test_vash_shoe_target","sep",
"test_doon_baby_highest","outro1","sr","outro2"
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
			validators: { audiotest: function(s) { if (s == "3401") return true; else return "Incorrect entry for \u2018test numbers\u2019";}
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

["test_tula_share_highest", "Form", { 
html: {include: "test_tula_share_highest.html"} 
}],

["test_tula_telephone_lowest", "Form", { 
html: {include: "test_tula_telephone_lowest.html"} 
}],

["test_tula_light_distractor", "Form", { 
html: {include: "test_tula_light_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_inside_highest", "Form", { 
html: {include: "test_vash_inside_highest.html"} 
}],

["test_vash_bead_lowest", "Form", { 
html: {include: "test_vash_bead_lowest.html"} 
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

["test_geck_up_lowest", "Form", { 
html: {include: "test_geck_up_lowest.html"} 
}],

["test_geck_outside_distractor", "Form", { 
html: {include: "test_geck_outside_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_bag_highest", "Form", { 
html: {include: "test_tiz_bag_highest.html"} 
}],

["test_tiz_music_lowest", "Form", { 
html: {include: "test_tiz_music_lowest.html"} 
}],

["test_tiz_bead_distractor", "Form", { 
html: {include: "test_tiz_bead_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_outside_highest", "Form", { 
html: {include: "test_bist_outside_highest.html"} 
}],

["test_bist_fun_lowest", "Form", { 
html: {include: "test_bist_fun_lowest.html"} 
}],

["test_bist_light_distractor", "Form", { 
html: {include: "test_bist_light_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_bead_highest", "Form", { 
html: {include: "test_jair_bead_highest.html"} 
}],

["test_jair_up_lowest", "Form", { 
html: {include: "test_jair_up_lowest.html"} 
}],

["test_jair_inside_distractor", "Form", { 
html: {include: "test_jair_inside_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_telephone_highest", "Form", { 
html: {include: "test_tace_telephone_highest.html"} 
}],

["test_tace_button_lowest", "Form", { 
html: {include: "test_tace_button_lowest.html"} 
}],

["test_tace_throw_distractor", "Form", { 
html: {include: "test_tace_throw_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_baby_highest", "Form", { 
html: {include: "test_doon_baby_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_telephone_distractor", "Form", { 
html: {include: "test_doon_telephone_distractor.html"} 
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

["test_telpen_bag_distractor", "Form", { 
html: {include: "test_telpen_bag_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_share_highest", "Form", { 
html: {include: "test_blime_share_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_telephone_distractor", "Form", { 
html: {include: "test_blime_telephone_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_light_highest", "Form", { 
html: {include: "test_zant_light_highest.html"} 
}],

["test_zant_come_lowest", "Form", { 
html: {include: "test_zant_come_lowest.html"} 
}],

["test_zant_bead_distractor", "Form", { 
html: {include: "test_zant_bead_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_telephone_highest", "Form", { 
html: {include: "test_mipen_telephone_highest.html"} 
}],

["test_mipen_inside_lowest", "Form", { 
html: {include: "test_mipen_inside_lowest.html"} 
}],

["test_mipen_light_distractor", "Form", { 
html: {include: "test_mipen_light_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];