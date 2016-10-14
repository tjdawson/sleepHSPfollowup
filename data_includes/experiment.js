var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_zant_friend_distractor","sep",
"test_mipen_bag_target","sep",
"test_geck_nose_target","sep",
"test_bist_come_distractor","sep",
"test_telpen_put_distractor","sep",
"test_doon_walk_distractor","sep",
"test_telpen_fetch_highest","sep",
"test_geck_like_lowest","sep",
"test_tula_call_lowest","sep",
"test_geck_mouth_highest","sep",
"test_bist_see_lowest","sep",
"test_tace_play_lowest","sep",
"test_mipen_follow_distractor","sep",
"test_tace_phone_target","sep",
"test_tace_fetch_distractor","sep",
"test_zant_mommy_lowest","sep",
"test_tiz_ok_distractor","sep",
"test_blime_toy_target","sep",
"test_zant_follow_highest","sep",
"test_blime_baby_highest","sep",
"test_vash_shoe_target","sep",
"test_geck_look_distractor","sep",
"test_bist_walk_highest","sep",
"test_doon_pretty_lowest","sep",
"test_zant_book_target","sep",
"test_vash_bag_lowest","sep",
"test_jair_up_lowest","sep",
"test_vash_put_highest","sep",
"test_doon_necklace_target","sep",
"test_tula_mommy_target","sep",
"test_jair_time_target","sep",
"test_telpen_ball_target","sep",
"test_mipen_where_lowest","sep",
"test_vash_mouth_distractor","sep",
"test_blime_hit_distractor","sep",
"test_tace_look_highest","sep",
"test_blime_push_lowest","sep",
"test_tula_baby_distractor","sep",
"test_bist_horse_target","sep",
"test_telpen_wheel_lowest","sep",
"test_tula_come_highest","sep",
"test_tiz_hit_highest","sep",
"test_jair_ok_highest","sep",
"test_tiz_toy_lowest","sep",
"test_tiz_thing_target","sep",
"test_doon_friend_highest","sep",
"test_jair_don't_distractor","sep",
"test_mipen_don't_highest","outro1","sr","outro2"
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

["test_tula_call_lowest", "Form", { 
html: {include: "test_tula_call_lowest.html"} 
}],

["test_tula_baby_distractor", "Form", { 
html: {include: "test_tula_baby_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_put_highest", "Form", { 
html: {include: "test_vash_put_highest.html"} 
}],

["test_vash_bag_lowest", "Form", { 
html: {include: "test_vash_bag_lowest.html"} 
}],

["test_vash_mouth_distractor", "Form", { 
html: {include: "test_vash_mouth_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_mouth_highest", "Form", { 
html: {include: "test_geck_mouth_highest.html"} 
}],

["test_geck_like_lowest", "Form", { 
html: {include: "test_geck_like_lowest.html"} 
}],

["test_geck_look_distractor", "Form", { 
html: {include: "test_geck_look_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_hit_highest", "Form", { 
html: {include: "test_tiz_hit_highest.html"} 
}],

["test_tiz_toy_lowest", "Form", { 
html: {include: "test_tiz_toy_lowest.html"} 
}],

["test_tiz_ok_distractor", "Form", { 
html: {include: "test_tiz_ok_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_walk_highest", "Form", { 
html: {include: "test_bist_walk_highest.html"} 
}],

["test_bist_see_lowest", "Form", { 
html: {include: "test_bist_see_lowest.html"} 
}],

["test_bist_come_distractor", "Form", { 
html: {include: "test_bist_come_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_ok_highest", "Form", { 
html: {include: "test_jair_ok_highest.html"} 
}],

["test_jair_up_lowest", "Form", { 
html: {include: "test_jair_up_lowest.html"} 
}],

["test_jair_don't_distractor", "Form", { 
html: {include: "test_jair_don't_distractor.html"} 
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

["test_tace_fetch_distractor", "Form", { 
html: {include: "test_tace_fetch_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_friend_highest", "Form", { 
html: {include: "test_doon_friend_highest.html"} 
}],

["test_doon_pretty_lowest", "Form", { 
html: {include: "test_doon_pretty_lowest.html"} 
}],

["test_doon_walk_distractor", "Form", { 
html: {include: "test_doon_walk_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_fetch_highest", "Form", { 
html: {include: "test_telpen_fetch_highest.html"} 
}],

["test_telpen_wheel_lowest", "Form", { 
html: {include: "test_telpen_wheel_lowest.html"} 
}],

["test_telpen_put_distractor", "Form", { 
html: {include: "test_telpen_put_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_baby_highest", "Form", { 
html: {include: "test_blime_baby_highest.html"} 
}],

["test_blime_push_lowest", "Form", { 
html: {include: "test_blime_push_lowest.html"} 
}],

["test_blime_hit_distractor", "Form", { 
html: {include: "test_blime_hit_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_mommy_lowest", "Form", { 
html: {include: "test_zant_mommy_lowest.html"} 
}],

["test_zant_friend_distractor", "Form", { 
html: {include: "test_zant_friend_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_don't_highest", "Form", { 
html: {include: "test_mipen_don't_highest.html"} 
}],

["test_mipen_where_lowest", "Form", { 
html: {include: "test_mipen_where_lowest.html"} 
}],

["test_mipen_follow_distractor", "Form", { 
html: {include: "test_mipen_follow_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];