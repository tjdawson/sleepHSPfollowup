var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tace_no_highest","sep",
"test_geck_decision_highest","sep",
"test_jair_no_distractor","sep",
"test_vash_necklace_highest","sep",
"test_tula_necklace_distractor","sep",
"test_tula_mommy_target","sep",
"test_mipen_baby_lowest_filler","sep",
"test_vash_shoe_target","sep",
"test_tula_phone_lowest","sep",
"test_blime_immediately_distractor","sep",
"test_doon_toy_highest","sep",
"test_tace_phone_target","sep",
"test_zant_cup_lowest","sep",
"test_tiz_come_distractor","sep",
"test_tiz_no_highest","sep",
"test_tula_cup_highest","sep",
"test_blime_sit_lowest","sep",
"test_tace_cup_distractor","sep",
"test_doon_necklace_target","sep",
"test_bist_come_lowest","sep",
"test_bist_baby_distractor","sep",
"test_mipen_after_distractor","sep",
"test_mipen_bag_target","sep",
"test_doon_decision_distractor","sep",
"test_vash_hug_lowest","sep",
"test_zant_book_target","sep",
"test_telpen_wear_distractor","sep",
"test_geck_nose_target","sep",
"test_blime_baby_highest","sep",
"test_zant_come_highest","sep",
"test_telpen_ball_target","sep",
"test_mipen_necklace_highest","sep",
"test_blime_toy_target","sep",
"test_vash_toy_distractor","sep",
"test_tiz_thing_target","sep",
"test_jair_time_target","sep",
"test_jair_come_highest","sep",
"test_geck_issue_lowest","sep",
"test_jair_necklace_lowest","sep",
"test_tace_bag_lowest","sep",
"test_telpen_cup_lowest","sep",
"test_doon_baby_lowest","sep",
"test_bist_horse_target","sep",
"test_telpen_spin_highest","sep",
"test_bist_no_highest","sep",
"test_geck_spin_distractor","sep",
"test_tiz_give_lowest","sep",
"test_zant_company_distractor","outro1","sr","outro2"
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

["test_tula_cup_highest", "Form", { 
html: {include: "test_tula_cup_highest.html"} 
}],

["test_tula_phone_lowest", "Form", { 
html: {include: "test_tula_phone_lowest.html"} 
}],

["test_tula_necklace_distractor", "Form", { 
html: {include: "test_tula_necklace_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_necklace_highest", "Form", { 
html: {include: "test_vash_necklace_highest.html"} 
}],

["test_vash_hug_lowest", "Form", { 
html: {include: "test_vash_hug_lowest.html"} 
}],

["test_vash_toy_distractor", "Form", { 
html: {include: "test_vash_toy_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_decision_highest", "Form", { 
html: {include: "test_geck_decision_highest.html"} 
}],

["test_geck_issue_lowest", "Form", { 
html: {include: "test_geck_issue_lowest.html"} 
}],

["test_geck_spin_distractor", "Form", { 
html: {include: "test_geck_spin_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_no_highest", "Form", { 
html: {include: "test_tiz_no_highest.html"} 
}],

["test_tiz_give_lowest", "Form", { 
html: {include: "test_tiz_give_lowest.html"} 
}],

["test_tiz_come_distractor", "Form", { 
html: {include: "test_tiz_come_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_no_highest", "Form", { 
html: {include: "test_bist_no_highest.html"} 
}],

["test_bist_come_lowest", "Form", { 
html: {include: "test_bist_come_lowest.html"} 
}],

["test_bist_baby_distractor", "Form", { 
html: {include: "test_bist_baby_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_come_highest", "Form", { 
html: {include: "test_jair_come_highest.html"} 
}],

["test_jair_necklace_lowest", "Form", { 
html: {include: "test_jair_necklace_lowest.html"} 
}],

["test_jair_no_distractor", "Form", { 
html: {include: "test_jair_no_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_no_highest", "Form", { 
html: {include: "test_tace_no_highest.html"} 
}],

["test_tace_bag_lowest", "Form", { 
html: {include: "test_tace_bag_lowest.html"} 
}],

["test_tace_cup_distractor", "Form", { 
html: {include: "test_tace_cup_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_toy_highest", "Form", { 
html: {include: "test_doon_toy_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_decision_distractor", "Form", { 
html: {include: "test_doon_decision_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_spin_highest", "Form", { 
html: {include: "test_telpen_spin_highest.html"} 
}],

["test_telpen_cup_lowest", "Form", { 
html: {include: "test_telpen_cup_lowest.html"} 
}],

["test_telpen_wear_distractor", "Form", { 
html: {include: "test_telpen_wear_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_baby_highest", "Form", { 
html: {include: "test_blime_baby_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_immediately_distractor", "Form", { 
html: {include: "test_blime_immediately_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_come_highest", "Form", { 
html: {include: "test_zant_come_highest.html"} 
}],

["test_zant_cup_lowest", "Form", { 
html: {include: "test_zant_cup_lowest.html"} 
}],

["test_zant_company_distractor", "Form", { 
html: {include: "test_zant_company_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_necklace_highest", "Form", { 
html: {include: "test_mipen_necklace_highest.html"} 
}],

["test_mipen_baby_lowest_filler", "Form", { 
html: {include: "test_mipen_baby_lowest_filler.html"} 
}],

["test_mipen_after_distractor", "Form", { 
html: {include: "test_mipen_after_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];