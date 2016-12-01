var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_geck_play_distractor","sep",
"test_bist_horse_target","sep",
"test_mipen_any_distractor","sep",
"test_tace_phone_target","sep",
"test_blime_toy_target","sep",
"test_tula_mommy_target","sep",
"test_blime_unite_distractor","sep",
"test_geck_wipe_highest","sep",
"test_zant_walk_highest","sep",
"test_zant_food_lowest","sep",
"test_bist_walk_highest","sep",
"test_telpen_wipe_distractor","sep",
"test_doon_necklace_target","sep",
"test_telpen_ball_target","sep",
"test_tiz_cup_distractor","sep",
"test_jair_bead_distractor","sep",
"test_jair_time_target","sep",
"test_tula_throw_distractor","sep",
"test_telpen_play_lowest","sep",
"test_tace_walk_distractor","sep",
"test_vash_bag_highest","sep",
"test_mipen_bag_target","sep",
"test_geck_drink_lowest","sep",
"test_tula_talk_highest","sep",
"test_tula_clothes_lowest","sep",
"test_tiz_ball_lowest","sep",
"test_doon_bead_highest","sep",
"test_vash_shoe_target","sep",
"test_jair_stand_highest","sep",
"test_zant_book_target","sep",
"test_mipen_cup_highest","sep",
"test_tiz_thing_target","sep",
"test_bist_stand_distractor","sep",
"test_geck_nose_target","sep",
"test_bist_laugh_lowest","sep",
"test_vash_toy_lowest","sep",
"test_doon_bag_distractor","sep",
"test_mipen_laugh_lowest_filler","sep",
"test_zant_evidence_distractor","sep",
"test_tace_talk_highest","sep",
"test_blime_bag_highest","sep",
"test_tiz_play_highest","sep",
"test_telpen_throw_highest","sep",
"test_doon_wear_lowest","sep",
"test_jair_necklace_lowest","sep",
"test_vash_talk_distractor","sep",
"test_tace_play_lowest_filler","sep",
"test_blime_play_lowest","outro1","sr","outro2"
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

["test_tula_talk_highest", "Form", { 
html: {include: "test_tula_talk_highest.html"} 
}],

["test_tula_clothes_lowest", "Form", { 
html: {include: "test_tula_clothes_lowest.html"} 
}],

["test_tula_throw_distractor", "Form", { 
html: {include: "test_tula_throw_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bag_highest", "Form", { 
html: {include: "test_vash_bag_highest.html"} 
}],

["test_vash_toy_lowest", "Form", { 
html: {include: "test_vash_toy_lowest.html"} 
}],

["test_vash_talk_distractor", "Form", { 
html: {include: "test_vash_talk_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_wipe_highest", "Form", { 
html: {include: "test_geck_wipe_highest.html"} 
}],

["test_geck_drink_lowest", "Form", { 
html: {include: "test_geck_drink_lowest.html"} 
}],

["test_geck_play_distractor", "Form", { 
html: {include: "test_geck_play_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_play_highest", "Form", { 
html: {include: "test_tiz_play_highest.html"} 
}],

["test_tiz_ball_lowest", "Form", { 
html: {include: "test_tiz_ball_lowest.html"} 
}],

["test_tiz_cup_distractor", "Form", { 
html: {include: "test_tiz_cup_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_walk_highest", "Form", { 
html: {include: "test_bist_walk_highest.html"} 
}],

["test_bist_laugh_lowest", "Form", { 
html: {include: "test_bist_laugh_lowest.html"} 
}],

["test_bist_stand_distractor", "Form", { 
html: {include: "test_bist_stand_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_stand_highest", "Form", { 
html: {include: "test_jair_stand_highest.html"} 
}],

["test_jair_necklace_lowest", "Form", { 
html: {include: "test_jair_necklace_lowest.html"} 
}],

["test_jair_bead_distractor", "Form", { 
html: {include: "test_jair_bead_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_talk_highest", "Form", { 
html: {include: "test_tace_talk_highest.html"} 
}],

["test_tace_play_lowest_filler", "Form", { 
html: {include: "test_tace_play_lowest_filler.html"} 
}],

["test_tace_walk_distractor", "Form", { 
html: {include: "test_tace_walk_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_bead_highest", "Form", { 
html: {include: "test_doon_bead_highest.html"} 
}],

["test_doon_wear_lowest", "Form", { 
html: {include: "test_doon_wear_lowest.html"} 
}],

["test_doon_bag_distractor", "Form", { 
html: {include: "test_doon_bag_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_play_lowest", "Form", { 
html: {include: "test_telpen_play_lowest.html"} 
}],

["test_telpen_wipe_distractor", "Form", { 
html: {include: "test_telpen_wipe_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_bag_highest", "Form", { 
html: {include: "test_blime_bag_highest.html"} 
}],

["test_blime_play_lowest", "Form", { 
html: {include: "test_blime_play_lowest.html"} 
}],

["test_blime_unite_distractor", "Form", { 
html: {include: "test_blime_unite_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_walk_highest", "Form", { 
html: {include: "test_zant_walk_highest.html"} 
}],

["test_zant_food_lowest", "Form", { 
html: {include: "test_zant_food_lowest.html"} 
}],

["test_zant_evidence_distractor", "Form", { 
html: {include: "test_zant_evidence_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_cup_highest", "Form", { 
html: {include: "test_mipen_cup_highest.html"} 
}],

["test_mipen_laugh_lowest_filler", "Form", { 
html: {include: "test_mipen_laugh_lowest_filler.html"} 
}],

["test_mipen_any_distractor", "Form", { 
html: {include: "test_mipen_any_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];