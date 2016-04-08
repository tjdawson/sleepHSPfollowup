var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tiz_rattle_lowest","sep",
"test_bist_come_lowest","sep",
"test_tace_telephone_highest","sep",
"test_tace_dog_lowest","sep",
"test_geck_nose_target","sep",
"test_mipen_telephone_highest","sep",
"test_jair_time_target","sep",
"test_zant_toy_lowest","sep",
"test_tiz_vaccuum_highest","sep",
"test_bist_telephone_distractor","sep",
"test_vash_purse_highest","sep",
"test_doon_doll_highest","sep",
"test_telpen_necklace_distractor","sep",
"test_blime_vaccuum_lowest","sep",
"test_tula_vaccuum_distractor","sep",
"test_doon_rattle_lowest","sep",
"test_tace_doll_distractor","sep",
"test_tula_mommy_target","sep",
"test_blime_toy_target","sep",
"test_tace_phone_target","sep",
"test_jair_necklace_highest","sep",
"test_tula_telephone_highest","sep",
"test_geck_telephone_distractor","sep",
"test_geck_cup_lowest","sep",
"test_bist_bounce_highest","sep",
"test_mipen_bag_target","sep",
"test_bist_horse_target","sep",
"test_vash_bounce_distractor","sep",
"test_tula_call_lowest","sep",
"test_tiz_thing_target","sep",
"test_jair_doll_distractor","sep",
"test_vash_shoe_target","sep",
"test_jair_fall_lowest","sep",
"test_vash_toy_lowest","sep",
"test_doon_necklace_target","sep",
"test_mipen_wipe_distractor","sep",
"test_tiz_diaper_distractor","sep",
"test_zant_book_target","sep",
"test_mipen_necklace_lowest","sep",
"test_zant_necklace_distractor","sep",
"test_zant_diaper_highest","sep",
"test_telpen_truck_lowest","sep",
"test_geck_horse_highest","sep",
"test_blime_wipe_highest","sep",
"test_blime_doll_distractor","sep",
"test_telpen_vaccuum_highest","sep",
"test_doon_wipe_distractor","sep",
"test_telpen_ball_target","outro1","sr","outro2"
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
continueMessage: null
        } ],
        
        //
["test_tula_mommy_target", "Form", { 
html: {include: "test_tula_mommy_target.html"} 
}],

["test_tula_telephone_highest", "Form", { 
html: {include: "test_tula_telephone_highest.html"} 
}],

["test_tula_call_lowest", "Form", { 
html: {include: "test_tula_call_lowest.html"} 
}],

["test_tula_diaper_distractor", "Form", { 
html: {include: "test_tula_diaper_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_purse_highest", "Form", { 
html: {include: "test_vash_purse_highest.html"} 
}],

["test_vash_toy_lowest", "Form", { 
html: {include: "test_vash_toy_lowest.html"} 
}],

["test_vash_diaper_distractor", "Form", { 
html: {include: "test_vash_diaper_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_cup_lowest", "Form", { 
html: {include: "test_geck_cup_lowest.html"} 
}],

["test_geck_doll_distractor", "Form", { 
html: {include: "test_geck_doll_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_vaccuum_highest", "Form", { 
html: {include: "test_tiz_vaccuum_highest.html"} 
}],

["test_tiz_rattle_lowest", "Form", { 
html: {include: "test_tiz_rattle_lowest.html"} 
}],

["test_tiz_horse_distractor", "Form", { 
html: {include: "test_tiz_horse_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_bounce_highest", "Form", { 
html: {include: "test_bist_bounce_highest.html"} 
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

["test_jair_necklace_highest", "Form", { 
html: {include: "test_jair_necklace_highest.html"} 
}],

["test_jair_fall_lowest", "Form", { 
html: {include: "test_jair_fall_lowest.html"} 
}],

["test_jair_wipe_distractor", "Form", { 
html: {include: "test_jair_wipe_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_telephone_highest", "Form", { 
html: {include: "test_tace_telephone_highest.html"} 
}],

["test_tace_dog_lowest", "Form", { 
html: {include: "test_tace_dog_lowest.html"} 
}],

["test_tace_bounce_distractor", "Form", { 
html: {include: "test_tace_bounce_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_doll_highest", "Form", { 
html: {include: "test_doon_doll_highest.html"} 
}],

["test_doon_rattle_lowest", "Form", { 
html: {include: "test_doon_rattle_lowest.html"} 
}],

["test_doon_telephone_distractor", "Form", { 
html: {include: "test_doon_telephone_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_vaccuum_highest", "Form", { 
html: {include: "test_telpen_vaccuum_highest.html"} 
}],

["test_telpen_truck_lowest", "Form", { 
html: {include: "test_telpen_truck_lowest.html"} 
}],

["test_telpen_purse_distractor", "Form", { 
html: {include: "test_telpen_purse_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_wipe_highest", "Form", { 
html: {include: "test_blime_wipe_highest.html"} 
}],

["test_blime_vaccuum_lowest", "Form", { 
html: {include: "test_blime_vaccuum_lowest.html"} 
}],

["test_blime_telephone_distractor", "Form", { 
html: {include: "test_blime_telephone_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_diaper_highest", "Form", { 
html: {include: "test_zant_diaper_highest.html"} 
}],

["test_zant_toy_lowest", "Form", { 
html: {include: "test_zant_toy_lowest.html"} 
}],

["test_zant_doll_distractor", "Form", { 
html: {include: "test_zant_doll_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_telephone_highest", "Form", { 
html: {include: "test_mipen_telephone_highest.html"} 
}],

["test_mipen_necklace_lowest", "Form", { 
html: {include: "test_mipen_necklace_lowest.html"} 
}],

["test_mipen_purse_distractor", "Form", { 
html: {include: "test_mipen_purse_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];