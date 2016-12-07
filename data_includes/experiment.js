var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_necklace_target","sep",
"test_tace_look_lowest","sep",
"test_jair_put_distractor","sep",
"test_geck_na_lowest","sep",
"test_zant_book_target","sep",
"test_mipen_ask_distractor","sep",
"test_vash_shoe_target","sep",
"test_jair_door_highest","sep",
"test_tace_phone_target","sep",
"test_tace_careful_highest","sep",
"test_bist_stair_distractor","sep",
"test_vash_put_highest","sep",
"test_zant_cabinet_distractor","sep",
"test_tiz_come_distractor","sep",
"test_bist_horse_target","sep",
"test_tiz_thing_target","sep",
"test_tula_mommy_target","sep",
"test_telpen_again_highest","sep",
"test_tace_pet_distractor","sep",
"test_tula_wipe_distractor","sep",
"test_tiz_na_lowest","sep",
"test_doon_careful_distractor","sep",
"test_telpen_ball_target","sep",
"test_telpen_doll_distractor","sep",
"test_zant_na_lowest","sep",
"test_geck_pet_highest","sep",
"test_telpen_good_lowest","sep",
"test_mipen_bag_target","sep",
"test_jair_na_lowest","sep",
"test_mipen_na_lowest","sep",
"test_tiz_stair_highest","sep",
"test_doon_doll_highest","sep",
"test_bist_careful_highest","sep",
"test_tula_na_lowest","sep",
"test_blime_door_distractor","sep",
"test_zant_look_highest","sep",
"test_blime_toy_target","sep",
"test_vash_ok_lowest","sep",
"test_jair_time_target","sep",
"test_vash_look_distractor","sep",
"test_blime_wipe_highest","sep",
"test_geck_again_distractor","sep",
"test_tula_come_highest","sep",
"test_mipen_cabinet_highest","sep",
"test_blime_na_lowest","sep",
"test_doon_na_lowest","sep",
"test_geck_mom_target","sep",
"test_bist_na_lowest","outro1","sr","outro2"
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

["test_tula_na_lowest", "Form", { 
html: {include: "test_tula_na_lowest.html"} 
}],

["test_tula_wipe_distractor", "Form", { 
html: {include: "test_tula_wipe_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_put_highest", "Form", { 
html: {include: "test_vash_put_highest.html"} 
}],

["test_vash_ok_lowest", "Form", { 
html: {include: "test_vash_ok_lowest.html"} 
}],

["test_vash_look_distractor", "Form", { 
html: {include: "test_vash_look_distractor.html"} 
}],

["test_geck_mom_target", "Form", { 
html: {include: "test_geck_mom_target.html"} 
}],

["test_geck_pet_highest", "Form", { 
html: {include: "test_geck_pet_highest.html"} 
}],

["test_geck_na_lowest", "Form", { 
html: {include: "test_geck_na_lowest.html"} 
}],

["test_geck_again_distractor", "Form", { 
html: {include: "test_geck_again_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_stair_highest", "Form", { 
html: {include: "test_tiz_stair_highest.html"} 
}],

["test_tiz_na_lowest", "Form", { 
html: {include: "test_tiz_na_lowest.html"} 
}],

["test_tiz_come_distractor", "Form", { 
html: {include: "test_tiz_come_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_careful_highest", "Form", { 
html: {include: "test_bist_careful_highest.html"} 
}],

["test_bist_na_lowest", "Form", { 
html: {include: "test_bist_na_lowest.html"} 
}],

["test_bist_stair_distractor", "Form", { 
html: {include: "test_bist_stair_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_door_highest", "Form", { 
html: {include: "test_jair_door_highest.html"} 
}],

["test_jair_na_lowest", "Form", { 
html: {include: "test_jair_na_lowest.html"} 
}],

["test_jair_put_distractor", "Form", { 
html: {include: "test_jair_put_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_careful_highest", "Form", { 
html: {include: "test_tace_careful_highest.html"} 
}],

["test_tace_look_lowest", "Form", { 
html: {include: "test_tace_look_lowest.html"} 
}],

["test_tace_pet_distractor", "Form", { 
html: {include: "test_tace_pet_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_doll_highest", "Form", { 
html: {include: "test_doon_doll_highest.html"} 
}],

["test_doon_na_lowest", "Form", { 
html: {include: "test_doon_na_lowest.html"} 
}],

["test_doon_careful_distractor", "Form", { 
html: {include: "test_doon_careful_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_again_highest", "Form", { 
html: {include: "test_telpen_again_highest.html"} 
}],

["test_telpen_good_lowest", "Form", { 
html: {include: "test_telpen_good_lowest.html"} 
}],

["test_telpen_doll_distractor", "Form", { 
html: {include: "test_telpen_doll_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_wipe_highest", "Form", { 
html: {include: "test_blime_wipe_highest.html"} 
}],

["test_blime_na_lowest", "Form", { 
html: {include: "test_blime_na_lowest.html"} 
}],

["test_blime_door_distractor", "Form", { 
html: {include: "test_blime_door_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_look_highest", "Form", { 
html: {include: "test_zant_look_highest.html"} 
}],

["test_zant_na_lowest", "Form", { 
html: {include: "test_zant_na_lowest.html"} 
}],

["test_zant_cabinet_distractor", "Form", { 
html: {include: "test_zant_cabinet_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_cabinet_highest", "Form", { 
html: {include: "test_mipen_cabinet_highest.html"} 
}],

["test_mipen_na_lowest", "Form", { 
html: {include: "test_mipen_na_lowest.html"} 
}],

["test_mipen_ask_distractor", "Form", { 
html: {include: "test_mipen_ask_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];