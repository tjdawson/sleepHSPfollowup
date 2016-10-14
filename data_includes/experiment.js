var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_necklace_target","sep",
"test_tiz_thing_target","sep",
"test_zant_follow_highest","sep",
"test_tula_me_lowest","sep",
"test_bist_follow_highest","sep",
"test_telpen_throw_highest","sep",
"test_geck_follow_distractor","sep",
"test_blime_okay_lowest","sep",
"test_mipen_able_distractor","sep",
"test_vash_happy_lowest","sep",
"test_jair_oops_highest","sep",
"test_geck_momma_target","sep",
"test_jair_look_distractor","sep",
"test_zant_member_distractor","sep",
"test_mipen_here_lowest","sep",
"test_mipen_pull_highest","sep",
"test_bist_ahead_lowest","sep",
"test_doon_hang_highest","sep",
"test_tula_mommy_target","sep",
"test_tace_play_lowest","sep",
"test_blime_bag_distractor","sep",
"test_tiz_phone_distractor","sep",
"test_geck_gentle_highest","sep",
"test_telpen_oops_distractor","sep",
"test_telpen_ball_target","sep",
"test_blime_toy_target","sep",
"test_mipen_bag_target","sep",
"test_vash_hang_distractor","sep",
"test_vash_shoe_target","sep",
"test_bist_play_distractor","sep",
"test_tiz_play_highest","sep",
"test_jair_time_target","sep",
"test_tiz_careful_lowest","sep",
"test_jair_take_lowest","sep",
"test_bist_horse_target","sep",
"test_blime_oops_highest","sep",
"test_vash_bag_highest","sep",
"test_doon_baby_lowest","sep",
"test_doon_pull_distractor","sep",
"test_tula_phone_highest","sep",
"test_tace_gentle_distractor","sep",
"test_zant_book_target","sep",
"test_tace_look_highest","sep",
"test_tula_throw_distractor","sep",
"test_telpen_hit_lowest","sep",
"test_zant_for_lowest","sep",
"test_geck_horse_lowest","sep",
"test_tace_phone_target","outro1","sr","outro2"
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

["test_tula_phone_highest", "Form", { 
html: {include: "test_tula_phone_highest.html"} 
}],

["test_tula_me_lowest", "Form", { 
html: {include: "test_tula_me_lowest.html"} 
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

["test_vash_happy_lowest", "Form", { 
html: {include: "test_vash_happy_lowest.html"} 
}],

["test_vash_hang_distractor", "Form", { 
html: {include: "test_vash_hang_distractor.html"} 
}],

["test_geck_momma_target", "Form", { 
html: {include: "test_geck_momma_target.html"} 
}],

["test_geck_gentle_highest", "Form", { 
html: {include: "test_geck_gentle_highest.html"} 
}],

["test_geck_horse_lowest", "Form", { 
html: {include: "test_geck_horse_lowest.html"} 
}],

["test_geck_follow_distractor", "Form", { 
html: {include: "test_geck_follow_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_play_highest", "Form", { 
html: {include: "test_tiz_play_highest.html"} 
}],

["test_tiz_careful_lowest", "Form", { 
html: {include: "test_tiz_careful_lowest.html"} 
}],

["test_tiz_phone_distractor", "Form", { 
html: {include: "test_tiz_phone_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_follow_highest", "Form", { 
html: {include: "test_bist_follow_highest.html"} 
}],

["test_bist_ahead_lowest", "Form", { 
html: {include: "test_bist_ahead_lowest.html"} 
}],

["test_bist_play_distractor", "Form", { 
html: {include: "test_bist_play_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_oops_highest", "Form", { 
html: {include: "test_jair_oops_highest.html"} 
}],

["test_jair_take_lowest", "Form", { 
html: {include: "test_jair_take_lowest.html"} 
}],

["test_jair_look_distractor", "Form", { 
html: {include: "test_jair_look_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_look_highest", "Form", { 
html: {include: "test_tace_look_highest.html"} 
}],

["test_tace_play_lowest", "Form", { 
html: {include: "test_tace_play_lowest.html"} 
}],

["test_tace_gentle_distractor", "Form", { 
html: {include: "test_tace_gentle_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_hang_highest", "Form", { 
html: {include: "test_doon_hang_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_pull_distractor", "Form", { 
html: {include: "test_doon_pull_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_hit_lowest", "Form", { 
html: {include: "test_telpen_hit_lowest.html"} 
}],

["test_telpen_oops_distractor", "Form", { 
html: {include: "test_telpen_oops_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_oops_highest", "Form", { 
html: {include: "test_blime_oops_highest.html"} 
}],

["test_blime_okay_lowest", "Form", { 
html: {include: "test_blime_okay_lowest.html"} 
}],

["test_blime_bag_distractor", "Form", { 
html: {include: "test_blime_bag_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_for_lowest", "Form", { 
html: {include: "test_zant_for_lowest.html"} 
}],

["test_zant_member_distractor", "Form", { 
html: {include: "test_zant_member_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_pull_highest", "Form", { 
html: {include: "test_mipen_pull_highest.html"} 
}],

["test_mipen_here_lowest", "Form", { 
html: {include: "test_mipen_here_lowest.html"} 
}],

["test_mipen_able_distractor", "Form", { 
html: {include: "test_mipen_able_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];