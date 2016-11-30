var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tace_hi_lowest","sep",
"test_tiz_yes_lowest","sep",
"test_telpen_yes_lowest","sep",
"test_tace_call_highest","sep",
"test_blime_toy_target","sep",
"test_bist_ready_distractor","sep",
"test_zant_come_highest","sep",
"test_tiz_give_highest","sep",
"test_vash_stay_highest","sep",
"test_telpen_stay_distractor","sep",
"test_jair_time_target","sep",
"test_tiz_come_distractor","sep",
"test_doon_yeah_lowest","sep",
"test_jair_up_lowest","sep",
"test_tiz_thing_target","sep",
"test_mipen_hey_lowest","sep",
"test_tula_stop_highest","sep",
"test_vash_sit_lowest","sep",
"test_blime_come_lowest","sep",
"test_tula_pet_distractor","sep",
"test_zant_book_target","sep",
"test_vash_shoe_target","sep",
"test_mipen_necklace_highest","sep",
"test_mipen_recently_distractor","sep",
"test_vash_give_distractor","sep",
"test_telpen_ball_target","sep",
"test_telpen_ready_highest","sep",
"test_tula_hello_lowest","sep",
"test_geck_pet_highest","sep",
"test_zant_president_distractor","sep",
"test_geck_nose_target","sep",
"test_blime_come_highest","sep",
"test_doon_hello_highest","sep",
"test_doon_necklace_target","sep",
"test_tula_mommy_target","sep",
"test_mipen_bag_target","sep",
"test_geck_necklace_distractor","sep",
"test_bist_come_highest","sep",
"test_doon_call_distractor","sep",
"test_blime_stop_distractor","sep",
"test_tace_open_distractor","sep",
"test_zant_come_lowest","sep",
"test_geck_wipe_lowest","sep",
"test_bist_hi_lowest","sep",
"test_bist_horsey_target","sep",
"test_jair_hello_distractor","sep",
"test_tace_phone_target","sep",
"test_jair_open_highest","outro1","sr","outro2"
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

["test_tula_stop_highest", "Form", { 
html: {include: "test_tula_stop_highest.html"} 
}],

["test_tula_hello_lowest", "Form", { 
html: {include: "test_tula_hello_lowest.html"} 
}],

["test_tula_pet_distractor", "Form", { 
html: {include: "test_tula_pet_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_stay_highest", "Form", { 
html: {include: "test_vash_stay_highest.html"} 
}],

["test_vash_sit_lowest", "Form", { 
html: {include: "test_vash_sit_lowest.html"} 
}],

["test_vash_give_distractor", "Form", { 
html: {include: "test_vash_give_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_pet_highest", "Form", { 
html: {include: "test_geck_pet_highest.html"} 
}],

["test_geck_wipe_lowest", "Form", { 
html: {include: "test_geck_wipe_lowest.html"} 
}],

["test_geck_necklace_distractor", "Form", { 
html: {include: "test_geck_necklace_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_give_highest", "Form", { 
html: {include: "test_tiz_give_highest.html"} 
}],

["test_tiz_yes_lowest", "Form", { 
html: {include: "test_tiz_yes_lowest.html"} 
}],

["test_tiz_come_distractor", "Form", { 
html: {include: "test_tiz_come_distractor.html"} 
}],

["test_bist_horsey_target", "Form", { 
html: {include: "test_bist_horsey_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_hi_lowest", "Form", { 
html: {include: "test_bist_hi_lowest.html"} 
}],

["test_bist_ready_distractor", "Form", { 
html: {include: "test_bist_ready_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_open_highest", "Form", { 
html: {include: "test_jair_open_highest.html"} 
}],

["test_jair_up_lowest", "Form", { 
html: {include: "test_jair_up_lowest.html"} 
}],

["test_jair_hello_distractor", "Form", { 
html: {include: "test_jair_hello_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_call_highest", "Form", { 
html: {include: "test_tace_call_highest.html"} 
}],

["test_tace_hi_lowest", "Form", { 
html: {include: "test_tace_hi_lowest.html"} 
}],

["test_tace_open_distractor", "Form", { 
html: {include: "test_tace_open_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_hello_highest", "Form", { 
html: {include: "test_doon_hello_highest.html"} 
}],

["test_doon_yeah_lowest", "Form", { 
html: {include: "test_doon_yeah_lowest.html"} 
}],

["test_doon_call_distractor", "Form", { 
html: {include: "test_doon_call_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_ready_highest", "Form", { 
html: {include: "test_telpen_ready_highest.html"} 
}],

["test_telpen_yes_lowest", "Form", { 
html: {include: "test_telpen_yes_lowest.html"} 
}],

["test_telpen_stay_distractor", "Form", { 
html: {include: "test_telpen_stay_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_come_highest", "Form", { 
html: {include: "test_blime_come_highest.html"} 
}],

["test_blime_come_lowest", "Form", { 
html: {include: "test_blime_come_lowest.html"} 
}],

["test_blime_stop_distractor", "Form", { 
html: {include: "test_blime_stop_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_come_highest", "Form", { 
html: {include: "test_zant_come_highest.html"} 
}],

["test_zant_come_lowest", "Form", { 
html: {include: "test_zant_come_lowest.html"} 
}],

["test_zant_president_distractor", "Form", { 
html: {include: "test_zant_president_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_necklace_highest", "Form", { 
html: {include: "test_mipen_necklace_highest.html"} 
}],

["test_mipen_hey_lowest", "Form", { 
html: {include: "test_mipen_hey_lowest.html"} 
}],

["test_mipen_recently_distractor", "Form", { 
html: {include: "test_mipen_recently_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];