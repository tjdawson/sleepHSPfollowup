var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_blime_dog_distractor","sep",
"test_mipen_phone_highest","sep",
"test_geck_nose_target","sep",
"test_jair_time_target","sep",
"test_tiz_this_lowest","sep",
"test_vash_baby_distractor","sep",
"test_zant_kiss_highest","sep",
"test_bist_dog_highest","sep",
"test_bist_bottle_distractor","sep",
"test_vash_purse_highest","sep",
"test_telpen_purse_distractor","sep",
"test_telpen_ball_target","sep",
"test_bist_horse_target","sep",
"test_telpen_lawnmower_highest","sep",
"test_geck_clean_lowest","sep",
"test_mipen_bag_target","sep",
"test_tace_phone_target","sep",
"test_zant_pillow_distractor","sep",
"test_jair_bead_highest","sep",
"test_geck_bead_distractor","sep",
"test_tula_kiss_distractor","sep",
"test_doon_bead_highest","sep",
"test_geck_napkin_highest","sep",
"test_tace_pillow_highest","sep",
"test_tiz_thing_target","sep",
"test_bist_farm_lowest","sep",
"test_doon_necklace_target","sep",
"test_vash_bead_lowest","sep",
"test_tace_napkin_distractor","sep",
"test_blime_where_lowest","sep",
"test_tula_santa_lowest","sep",
"test_blime_baby_highest","sep",
"test_doon_phone_distractor","sep",
"test_mipen_individual_distractor","sep",
"test_tace_bag_lowest","sep",
"test_tiz_lawnmower_distractor","sep",
"test_tula_bottle_highest","sep",
"test_tiz_stair_highest","sep",
"test_jair_stair_distractor","sep",
"test_blime_toy_target","sep",
"test_telpen_spin_lowest","sep",
"test_jair_neck_lowest","sep",
"test_zant_follow_lowest","sep",
"test_tula_mommy_target","sep",
"test_zant_book_target","sep",
"test_vash_shoe_target","sep",
"test_doon_neck_lowest","sep",
"test_mipen_bottle_lowest","outro1","sr","outro2"
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

["test_tula_bottle_highest", "Form", { 
html: {include: "test_tula_bottle_highest.html"} 
}],

["test_tula_santa_lowest", "Form", { 
html: {include: "test_tula_santa_lowest.html"} 
}],

["test_tula_kiss_distractor", "Form", { 
html: {include: "test_tula_kiss_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_purse_highest", "Form", { 
html: {include: "test_vash_purse_highest.html"} 
}],

["test_vash_bead_lowest", "Form", { 
html: {include: "test_vash_bead_lowest.html"} 
}],

["test_vash_baby_distractor", "Form", { 
html: {include: "test_vash_baby_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_napkin_highest", "Form", { 
html: {include: "test_geck_napkin_highest.html"} 
}],

["test_geck_clean_lowest", "Form", { 
html: {include: "test_geck_clean_lowest.html"} 
}],

["test_geck_bead_distractor", "Form", { 
html: {include: "test_geck_bead_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_stair_highest", "Form", { 
html: {include: "test_tiz_stair_highest.html"} 
}],

["test_tiz_this_lowest", "Form", { 
html: {include: "test_tiz_this_lowest.html"} 
}],

["test_tiz_lawnmower_distractor", "Form", { 
html: {include: "test_tiz_lawnmower_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_dog_highest", "Form", { 
html: {include: "test_bist_dog_highest.html"} 
}],

["test_bist_farm_lowest", "Form", { 
html: {include: "test_bist_farm_lowest.html"} 
}],

["test_bist_bottle_distractor", "Form", { 
html: {include: "test_bist_bottle_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_bead_highest", "Form", { 
html: {include: "test_jair_bead_highest.html"} 
}],

["test_jair_neck_lowest", "Form", { 
html: {include: "test_jair_neck_lowest.html"} 
}],

["test_jair_stair_distractor", "Form", { 
html: {include: "test_jair_stair_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_pillow_highest", "Form", { 
html: {include: "test_tace_pillow_highest.html"} 
}],

["test_tace_bag_lowest", "Form", { 
html: {include: "test_tace_bag_lowest.html"} 
}],

["test_tace_napkin_distractor", "Form", { 
html: {include: "test_tace_napkin_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_bead_highest", "Form", { 
html: {include: "test_doon_bead_highest.html"} 
}],

["test_doon_neck_lowest", "Form", { 
html: {include: "test_doon_neck_lowest.html"} 
}],

["test_doon_phone_distractor", "Form", { 
html: {include: "test_doon_phone_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_lawnmower_highest", "Form", { 
html: {include: "test_telpen_lawnmower_highest.html"} 
}],

["test_telpen_spin_lowest", "Form", { 
html: {include: "test_telpen_spin_lowest.html"} 
}],

["test_telpen_purse_distractor", "Form", { 
html: {include: "test_telpen_purse_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_baby_highest", "Form", { 
html: {include: "test_blime_baby_highest.html"} 
}],

["test_blime_where_lowest", "Form", { 
html: {include: "test_blime_where_lowest.html"} 
}],

["test_blime_dog_distractor", "Form", { 
html: {include: "test_blime_dog_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_kiss_highest", "Form", { 
html: {include: "test_zant_kiss_highest.html"} 
}],

["test_zant_follow_lowest", "Form", { 
html: {include: "test_zant_follow_lowest.html"} 
}],

["test_zant_pillow_distractor", "Form", { 
html: {include: "test_zant_pillow_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_phone_highest", "Form", { 
html: {include: "test_mipen_phone_highest.html"} 
}],

["test_mipen_bottle_lowest", "Form", { 
html: {include: "test_mipen_bottle_lowest.html"} 
}],

["test_mipen_individual_distractor", "Form", { 
html: {include: "test_mipen_individual_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];