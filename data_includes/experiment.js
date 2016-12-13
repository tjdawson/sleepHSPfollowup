var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_tambourine_distractor","sep",
"test_bist_pet_highest","sep",
"test_tula_milk_lowest","sep",
"test_mipen_put_highest","sep",
"test_geck_love_lowest","sep",
"test_vash_truck_highest","sep",
"test_mipen_away_lowest","sep",
"test_telpen_spin_lowest","sep",
"test_jair_eat_highest","sep",
"test_tace_pet_distractor","sep",
"test_blime_clean_highest","sep",
"test_tiz_put_distractor","sep",
"test_zant_follow_highest","sep",
"test_bist_whee_distractor","sep",
"test_zant_book_target","sep",
"test_vash_shoe_target","sep",
"test_zant_up_distractor","sep",
"test_jair_time_target","sep",
"test_mipen_bag_target","sep",
"test_telpen_whee_highest","sep",
"test_telpen_ball_target","sep",
"test_bist_come_lowest","sep",
"test_blime_toy_target","sep",
"test_tula_come_highest","sep",
"test_doon_necklace_target","sep",
"test_jair_careful_distractor","sep",
"test_telpen_eat_distractor","sep",
"test_zant_give_lowest","sep",
"test_tula_mommy_target","sep",
"test_doon_music_lowest","sep",
"test_tace_phone_target","sep",
"test_tace_careful_highest","sep",
"test_geck_nose_target","sep",
"test_tiz_thing_target","sep",
"test_vash_toy_lowest","sep",
"test_tula_sit_distractor","sep",
"test_tace_take_lowest","sep",
"test_jair_carefull_lowest","sep",
"test_vash_come_distractor","sep",
"test_tiz_careful_lowest","sep",
"test_geck_up_highest","sep",
"test_geck_truck_distractor","sep",
"test_blime_put_lowest","sep",
"test_blime_follow_distractor","sep",
"test_bist_horse_target","sep",
"test_tiz_tambourine_highest","sep",
"test_mipen_clean_distractor","sep",
"test_doon_sit_highest","outro1","sr","outro2"
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

["test_tula_milk_lowest", "Form", { 
html: {include: "test_tula_milk_lowest.html"} 
}],

["test_tula_sit_distractor", "Form", { 
html: {include: "test_tula_sit_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_truck_highest", "Form", { 
html: {include: "test_vash_truck_highest.html"} 
}],

["test_vash_toy_lowest", "Form", { 
html: {include: "test_vash_toy_lowest.html"} 
}],

["test_vash_come_distractor", "Form", { 
html: {include: "test_vash_come_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_up_highest", "Form", { 
html: {include: "test_geck_up_highest.html"} 
}],

["test_geck_love_lowest", "Form", { 
html: {include: "test_geck_love_lowest.html"} 
}],

["test_geck_truck_distractor", "Form", { 
html: {include: "test_geck_truck_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_tambourine_highest", "Form", { 
html: {include: "test_tiz_tambourine_highest.html"} 
}],

["test_tiz_careful_lowest", "Form", { 
html: {include: "test_tiz_careful_lowest.html"} 
}],

["test_tiz_put_distractor", "Form", { 
html: {include: "test_tiz_put_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_pet_highest", "Form", { 
html: {include: "test_bist_pet_highest.html"} 
}],

["test_bist_come_lowest", "Form", { 
html: {include: "test_bist_come_lowest.html"} 
}],

["test_bist_whee_distractor", "Form", { 
html: {include: "test_bist_whee_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_eat_highest", "Form", { 
html: {include: "test_jair_eat_highest.html"} 
}],

["test_jair_carefull_lowest", "Form", { 
html: {include: "test_jair_carefull_lowest.html"} 
}],

["test_jair_careful_distractor", "Form", { 
html: {include: "test_jair_careful_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_careful_highest", "Form", { 
html: {include: "test_tace_careful_highest.html"} 
}],

["test_tace_take_lowest", "Form", { 
html: {include: "test_tace_take_lowest.html"} 
}],

["test_tace_pet_distractor", "Form", { 
html: {include: "test_tace_pet_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_sit_highest", "Form", { 
html: {include: "test_doon_sit_highest.html"} 
}],

["test_doon_music_lowest", "Form", { 
html: {include: "test_doon_music_lowest.html"} 
}],

["test_doon_tambourine_distractor", "Form", { 
html: {include: "test_doon_tambourine_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_whee_highest", "Form", { 
html: {include: "test_telpen_whee_highest.html"} 
}],

["test_telpen_spin_lowest", "Form", { 
html: {include: "test_telpen_spin_lowest.html"} 
}],

["test_telpen_eat_distractor", "Form", { 
html: {include: "test_telpen_eat_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_clean_highest", "Form", { 
html: {include: "test_blime_clean_highest.html"} 
}],

["test_blime_put_lowest", "Form", { 
html: {include: "test_blime_put_lowest.html"} 
}],

["test_blime_follow_distractor", "Form", { 
html: {include: "test_blime_follow_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_give_lowest", "Form", { 
html: {include: "test_zant_give_lowest.html"} 
}],

["test_zant_up_distractor", "Form", { 
html: {include: "test_zant_up_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_put_highest", "Form", { 
html: {include: "test_mipen_put_highest.html"} 
}],

["test_mipen_away_lowest", "Form", { 
html: {include: "test_mipen_away_lowest.html"} 
}],

["test_mipen_clean_distractor", "Form", { 
html: {include: "test_mipen_clean_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];