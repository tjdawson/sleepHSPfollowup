var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_zant_book_target","sep",
"test_jair_juice_distractor","sep",
"test_jair_want_lowest","sep",
"test_doon_other_highest","sep",
"test_geck_nose_target","sep",
"test_bist_toy_distractor","sep",
"test_zant_come_lowest","sep",
"test_tula_push_distractor","sep",
"test_tace_put_distractor","sep",
"test_vash_shoe_target","sep",
"test_doon_necklace_target","sep",
"test_jair_time_target","sep",
"test_blime_toy_target","sep",
"test_blime_other_distractor","sep",
"test_tula_call_highest","sep",
"test_telpen_ball_target","sep",
"test_mipen_juice_highest","sep",
"test_geck_gentle_lowest","sep",
"test_bist_horse_target","sep",
"test_geck_throw_distractor","sep",
"test_vash_bear_lowest","sep",
"test_mipen_bag_target","sep",
"test_tiz_thing_target","sep",
"test_telpen_spin_lowest","sep",
"test_vash_dad_distractor","sep",
"test_tace_dog_lowest","sep",
"test_tiz_bounce_distractor","sep",
"test_geck_dad_highest","sep",
"test_mipen_phone_lowest","sep",
"test_zant_read_highest","sep",
"test_doon_call_distractor","sep",
"test_zant_pillow_distractor","sep",
"test_tace_pillow_highest","sep",
"test_tiz_tambourine_lowest","sep",
"test_mipen_read_distractor","sep",
"test_bist_wash_lowest","sep",
"test_vash_put_highest","sep",
"test_tula_mommy_target","sep",
"test_doon_doll_lowest","sep",
"test_telpen_necklace_distractor","sep",
"test_blime_look_lowest","sep",
"test_telpen_throw_highest","sep",
"test_tace_phone_target","sep",
"test_blime_push_highest","sep",
"test_jair_necklace_highest","sep",
"test_bist_bounce_highest","sep",
"test_tiz_toy_highest","sep",
"test_tula_toy_lowest","outro1","sr","outro2"
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

["test_tula_call_highest", "Form", { 
html: {include: "test_tula_call_highest.html"} 
}],

["test_tula_toy_lowest", "Form", { 
html: {include: "test_tula_toy_lowest.html"} 
}],

["test_tula_push_distractor", "Form", { 
html: {include: "test_tula_push_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_put_highest", "Form", { 
html: {include: "test_vash_put_highest.html"} 
}],

["test_vash_bear_lowest", "Form", { 
html: {include: "test_vash_bear_lowest.html"} 
}],

["test_vash_dad_distractor", "Form", { 
html: {include: "test_vash_dad_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_dad_highest", "Form", { 
html: {include: "test_geck_dad_highest.html"} 
}],

["test_geck_gentle_lowest", "Form", { 
html: {include: "test_geck_gentle_lowest.html"} 
}],

["test_geck_throw_distractor", "Form", { 
html: {include: "test_geck_throw_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_toy_highest", "Form", { 
html: {include: "test_tiz_toy_highest.html"} 
}],

["test_tiz_tambourine_lowest", "Form", { 
html: {include: "test_tiz_tambourine_lowest.html"} 
}],

["test_tiz_bounce_distractor", "Form", { 
html: {include: "test_tiz_bounce_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_bounce_highest", "Form", { 
html: {include: "test_bist_bounce_highest.html"} 
}],

["test_bist_wash_lowest", "Form", { 
html: {include: "test_bist_wash_lowest.html"} 
}],

["test_bist_toy_distractor", "Form", { 
html: {include: "test_bist_toy_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_necklace_highest", "Form", { 
html: {include: "test_jair_necklace_highest.html"} 
}],

["test_jair_want_lowest", "Form", { 
html: {include: "test_jair_want_lowest.html"} 
}],

["test_jair_juice_distractor", "Form", { 
html: {include: "test_jair_juice_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_pillow_highest", "Form", { 
html: {include: "test_tace_pillow_highest.html"} 
}],

["test_tace_dog_lowest", "Form", { 
html: {include: "test_tace_dog_lowest.html"} 
}],

["test_tace_put_distractor", "Form", { 
html: {include: "test_tace_put_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_other_highest", "Form", { 
html: {include: "test_doon_other_highest.html"} 
}],

["test_doon_doll_lowest", "Form", { 
html: {include: "test_doon_doll_lowest.html"} 
}],

["test_doon_call_distractor", "Form", { 
html: {include: "test_doon_call_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_spin_lowest", "Form", { 
html: {include: "test_telpen_spin_lowest.html"} 
}],

["test_telpen_necklace_distractor", "Form", { 
html: {include: "test_telpen_necklace_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_push_highest", "Form", { 
html: {include: "test_blime_push_highest.html"} 
}],

["test_blime_look_lowest", "Form", { 
html: {include: "test_blime_look_lowest.html"} 
}],

["test_blime_other_distractor", "Form", { 
html: {include: "test_blime_other_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_read_highest", "Form", { 
html: {include: "test_zant_read_highest.html"} 
}],

["test_zant_come_lowest", "Form", { 
html: {include: "test_zant_come_lowest.html"} 
}],

["test_zant_pillow_distractor", "Form", { 
html: {include: "test_zant_pillow_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_juice_highest", "Form", { 
html: {include: "test_mipen_juice_highest.html"} 
}],

["test_mipen_phone_lowest", "Form", { 
html: {include: "test_mipen_phone_lowest.html"} 
}],

["test_mipen_read_distractor", "Form", { 
html: {include: "test_mipen_read_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];