var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_jair_Shoe_distractor","sep",
"test_mipen_bag_target","sep",
"test_telpen_Away_distractor","sep",
"test_geck_Horse_highest","sep",
"test_tula_Shake_distractor","sep",
"test_mipen_me_distractor","sep",
"test_geck_nose_target","sep",
"test_telpen_Throw_highest","sep",
"test_telpen_ball_target","sep",
"test_vash_inside_lowest","sep",
"test_tiz_play_lowest","sep",
"test_tiz_Away_distractor","sep",
"test_tace_phone_target","sep",
"test_tula_me_highest","sep",
"test_mipen_Away_highest","sep",
"test_bist_horse_target","sep",
"test_vash_me_distractor","sep",
"test_geck_pick_lowest","sep",
"test_tiz_Shake_highest","sep",
"test_tace_Horse_distractor","sep",
"test_doon_Away_distractor","sep",
"test_zant_book_target","sep",
"test_jair_jewelry_lowest","sep",
"test_tula_take_lowest","sep",
"test_tace_hello_lowest","sep",
"test_vash_Shoe_highest","sep",
"test_vash_shoe_target","sep",
"test_jair_ground_highest","sep",
"test_zant_toy_lowest","sep",
"test_tiz_thing_target","sep",
"test_doon_Dance_highest","sep",
"test_bist_Unicorn_lowest","sep",
"test_tace_Phone_highest","sep",
"test_telpen_play_lowest","sep",
"test_tula_mommy_target","sep",
"test_bist_Come_highest","sep",
"test_blime_toy_target","sep",
"test_geck_Dance_distractor","sep",
"test_jair_time_target","sep",
"test_zant_ground_distractor","sep",
"test_zant_Walk_highest","sep",
"test_doon_up_lowest","sep",
"test_doon_necklace_target","sep",
"test_blime_Horse_distractor","sep",
"test_bist_Shake_distractor","sep",
"test_mipen_Toys_lowest","sep",
"test_blime_lose_lowest","sep",
"test_blime_Watch_highest","outro1","sr","outro2"
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

["test_tula_me_highest", "Form", { 
html: {include: "test_tula_me_highest.html"} 
}],

["test_tula_take_lowest", "Form", { 
html: {include: "test_tula_take_lowest.html"} 
}],

["test_tula_Dance_distractor", "Form", { 
html: {include: "test_tula_Dance_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_Shoe_highest", "Form", { 
html: {include: "test_vash_Shoe_highest.html"} 
}],

["test_vash_inside_lowest", "Form", { 
html: {include: "test_vash_inside_lowest.html"} 
}],

["test_vash_Phone_distractor", "Form", { 
html: {include: "test_vash_Phone_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_Away_highest", "Form", { 
html: {include: "test_mipen_Away_highest.html"} 
}],

["test_mipen_Toys_lowest", "Form", { 
html: {include: "test_mipen_Toys_lowest.html"} 
}],

["test_mipen_Walk_distractor", "Form", { 
html: {include: "test_mipen_Walk_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_Throw_highest", "Form", { 
html: {include: "test_telpen_Throw_highest.html"} 
}],

["test_telpen_play_lowest", "Form", { 
html: {include: "test_telpen_play_lowest.html"} 
}],

["test_telpen_Dance_distractor", "Form", { 
html: {include: "test_telpen_Dance_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_Shake_highest", "Form", { 
html: {include: "test_tiz_Shake_highest.html"} 
}],

["test_tiz_play_lowest", "Form", { 
html: {include: "test_tiz_play_lowest.html"} 
}],

["test_tiz_Phone_distractor", "Form", { 
html: {include: "test_tiz_Phone_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_Come_highest", "Form", { 
html: {include: "test_bist_Come_highest.html"} 
}],

["test_bist_Unicorn_lowest", "Form", { 
html: {include: "test_bist_Unicorn_lowest.html"} 
}],

["test_bist_Shoe_distractor", "Form", { 
html: {include: "test_bist_Shoe_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_ground_highest", "Form", { 
html: {include: "test_jair_ground_highest.html"} 
}],

["test_jair_jewelry_lowest", "Form", { 
html: {include: "test_jair_jewelry_lowest.html"} 
}],

["test_jair_Away_distractor", "Form", { 
html: {include: "test_jair_Away_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_Dance_highest", "Form", { 
html: {include: "test_doon_Dance_highest.html"} 
}],

["test_doon_up_lowest", "Form", { 
html: {include: "test_doon_up_lowest.html"} 
}],

["test_doon_Throw_distractor", "Form", { 
html: {include: "test_doon_Throw_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_Horse_highest", "Form", { 
html: {include: "test_geck_Horse_highest.html"} 
}],

["test_geck_pick_lowest", "Form", { 
html: {include: "test_geck_pick_lowest.html"} 
}],

["test_geck_Dance_distractor", "Form", { 
html: {include: "test_geck_Dance_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_Watch_highest", "Form", { 
html: {include: "test_blime_Watch_highest.html"} 
}],

["test_blime_lose_lowest", "Form", { 
html: {include: "test_blime_lose_lowest.html"} 
}],

["test_blime_Horse_distractor", "Form", { 
html: {include: "test_blime_Horse_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_Walk_highest", "Form", { 
html: {include: "test_zant_Walk_highest.html"} 
}],

["test_zant_toy_lowest", "Form", { 
html: {include: "test_zant_toy_lowest.html"} 
}],

["test_zant_Away_distractor", "Form", { 
html: {include: "test_zant_Away_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_Phone_highest", "Form", { 
html: {include: "test_tace_Phone_highest.html"} 
}],

["test_tace_hello_lowest", "Form", { 
html: {include: "test_tace_hello_lowest.html"} 
}],

["test_tace_Horse_distractor", "Form", { 
html: {include: "test_tace_Horse_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];