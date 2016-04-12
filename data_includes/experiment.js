var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_necklace_target","sep",
"test_vash_Follow_distractor","sep",
"test_mipen_bag_target","sep",
"test_zant_Slow_lowest","sep",
"test_tiz_Shake_lowest","sep",
"test_jair_Up_highest","sep",
"test_jair_Take_distractor","sep",
"test_tula_Who_lowest","sep",
"test_tace_Here_lowest","sep",
"test_geck_Blow_lowest","sep",
"test_bist_Follow_highest","sep",
"test_tula_Come_highest","sep",
"test_tace_Stop_highest","sep",
"test_blime_toy_target","sep",
"test_zant_Slow_highest","sep",
"test_vash_shoe_target","sep",
"test_vash_Take_lowest","sep",
"test_telpen_Toss_highest","sep",
"test_blime_Look_lowest","sep",
"test_tiz_Purse_distractor","sep",
"test_jair_Up_lowest","sep",
"test_bist_Toss_distractor","sep",
"test_geck_Nose_highest","sep",
"test_tace_Slow_distractor","sep",
"test_vash_Take_highest","sep",
"test_geck_nose_target","sep",
"test_tace_phone_target","sep",
"test_zant_book_target","sep",
"test_jair_time_target","sep",
"test_telpen_Turn_lowest","sep",
"test_tula_mommy_target","sep",
"test_tiz_Shake_highest","sep",
"test_mipen_Want_lowest","sep",
"test_doon_Stop_distractor","sep",
"test_tiz_thing_target","sep",
"test_bist_horse_target","sep",
"test_mipen_Slow_distractor","sep",
"test_mipen_Inside_highest","sep",
"test_tula_Stop_distractor","sep",
"test_zant_Nose_distractor","sep",
"test_blime_Purse_highest","sep",
"test_telpen_ball_target","sep",
"test_telpen_Take_distractor","sep",
"test_blime_Follow_distractor","sep",
"test_bist_Come_lowest","sep",
"test_geck_Purse_distractor","sep",
"test_doon_Pull_lowest","sep",
"test_doon_Good_highest","outro1","sr","outro2"
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

["test_tula_Come_highest", "Form", { 
html: {include: "test_tula_Come_highest.html"} 
}],

["test_tula_Who_lowest", "Form", { 
html: {include: "test_tula_Who_lowest.html"} 
}],

["test_tula_Shake_distractor", "Form", { 
html: {include: "test_tula_Shake_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_Take_highest", "Form", { 
html: {include: "test_vash_Take_highest.html"} 
}],

["test_vash_Take_lowest", "Form", { 
html: {include: "test_vash_Take_lowest.html"} 
}],

["test_vash_Shake_distractor", "Form", { 
html: {include: "test_vash_Shake_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_Nose_highest", "Form", { 
html: {include: "test_geck_Nose_highest.html"} 
}],

["test_geck_Blow_lowest", "Form", { 
html: {include: "test_geck_Blow_lowest.html"} 
}],

["test_geck_Stop_distractor", "Form", { 
html: {include: "test_geck_Stop_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_Shake_highest", "Form", { 
html: {include: "test_tiz_Shake_highest.html"} 
}],

["test_tiz_Shake_lowest", "Form", { 
html: {include: "test_tiz_Shake_lowest.html"} 
}],

["test_tiz_Follow_distractor", "Form", { 
html: {include: "test_tiz_Follow_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_Follow_highest", "Form", { 
html: {include: "test_bist_Follow_highest.html"} 
}],

["test_bist_Come_lowest", "Form", { 
html: {include: "test_bist_Come_lowest.html"} 
}],

["test_bist_Slow_distractor", "Form", { 
html: {include: "test_bist_Slow_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_Up_highest", "Form", { 
html: {include: "test_jair_Up_highest.html"} 
}],

["test_jair_Up_lowest", "Form", { 
html: {include: "test_jair_Up_lowest.html"} 
}],

["test_jair_Nose_distractor", "Form", { 
html: {include: "test_jair_Nose_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_Stop_highest", "Form", { 
html: {include: "test_tace_Stop_highest.html"} 
}],

["test_tace_Here_lowest", "Form", { 
html: {include: "test_tace_Here_lowest.html"} 
}],

["test_tace_Good_distractor", "Form", { 
html: {include: "test_tace_Good_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_Good_highest", "Form", { 
html: {include: "test_doon_Good_highest.html"} 
}],

["test_doon_Pull_lowest", "Form", { 
html: {include: "test_doon_Pull_lowest.html"} 
}],

["test_doon_Shake_distractor", "Form", { 
html: {include: "test_doon_Shake_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_Toss_highest", "Form", { 
html: {include: "test_telpen_Toss_highest.html"} 
}],

["test_telpen_Turn_lowest", "Form", { 
html: {include: "test_telpen_Turn_lowest.html"} 
}],

["test_telpen_Come_distractor", "Form", { 
html: {include: "test_telpen_Come_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_Purse_highest", "Form", { 
html: {include: "test_blime_Purse_highest.html"} 
}],

["test_blime_Look_lowest", "Form", { 
html: {include: "test_blime_Look_lowest.html"} 
}],

["test_blime_Slow_distractor", "Form", { 
html: {include: "test_blime_Slow_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_Slow_highest", "Form", { 
html: {include: "test_zant_Slow_highest.html"} 
}],

["test_zant_Slow_lowest", "Form", { 
html: {include: "test_zant_Slow_lowest.html"} 
}],

["test_zant_Stop_distractor", "Form", { 
html: {include: "test_zant_Stop_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_Inside_highest", "Form", { 
html: {include: "test_mipen_Inside_highest.html"} 
}],

["test_mipen_Want_lowest", "Form", { 
html: {include: "test_mipen_Want_lowest.html"} 
}],

["test_mipen_Shake_distractor", "Form", { 
html: {include: "test_mipen_Shake_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];