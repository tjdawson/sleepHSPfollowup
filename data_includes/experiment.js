var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_bist_wind_highest","sep",
"test_doon_necklace_target","sep",
"test_telpen_good_lowest","sep",
"test_tiz_open_distractor","sep",
"test_telpen_ball_target","sep",
"test_vash_watch_highest","sep",
"test_geck_mom_target","sep",
"test_mipen_open_highest","sep",
"test_vash_toy_distractor","sep",
"test_doon_careful_lowest","sep",
"test_mipen_simply_distractor","sep",
"test_tula_mommy_target","sep",
"test_geck_way_distractor","sep",
"test_geck_here_highest","sep",
"test_telpen_watch_distractor","sep",
"test_tiz_thing_target","sep",
"test_mipen_dangle_lowest","sep",
"test_bist_come_lowest","sep",
"test_tace_like_distractor","sep",
"test_doon_toy_highest","sep",
"test_jair_grass_lowest","sep",
"test_tiz_like_highest","sep",
"test_telpen_way_highest","sep",
"test_zant_yummy_distractor","sep",
"test_mipen_bag_target","sep",
"test_tace_phone_target","sep",
"test_zant_walk_highest","sep",
"test_jair_walk_distractor","sep",
"test_blime_wow_lowest","sep",
"test_tiz_reach_lowest","sep",
"test_jair_yummy_highest","sep",
"test_vash_shoe_target","sep",
"test_blime_wind_distractor","sep",
"test_zant_dad_lowest","sep",
"test_tula_fall_distractor","sep",
"test_vash_bag_lowest","sep",
"test_bist_here_distractor","sep",
"test_jair_time_target","sep",
"test_tula_phone_lowest","sep",
"test_zant_mom_target","sep",
"test_tace_here_lowest","sep",
"test_geck_gone_lowest","sep",
"test_bist_horse_target","sep",
"test_tace_fall_highest","sep",
"test_doon_hello_distractor","sep",
"test_tula_hello_highest","sep",
"test_blime_toy_target","sep",
"test_blime_like_highest","outro1","sr","outro2"
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

["test_tula_hello_highest", "Form", { 
html: {include: "test_tula_hello_highest.html"} 
}],

["test_tula_phone_lowest", "Form", { 
html: {include: "test_tula_phone_lowest.html"} 
}],

["test_tula_fall_distractor", "Form", { 
html: {include: "test_tula_fall_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_watch_highest", "Form", { 
html: {include: "test_vash_watch_highest.html"} 
}],

["test_vash_bag_lowest", "Form", { 
html: {include: "test_vash_bag_lowest.html"} 
}],

["test_vash_toy_distractor", "Form", { 
html: {include: "test_vash_toy_distractor.html"} 
}],

["test_geck_mom_target", "Form", { 
html: {include: "test_geck_mom_target.html"} 
}],

["test_geck_here_highest", "Form", { 
html: {include: "test_geck_here_highest.html"} 
}],

["test_geck_gone_lowest", "Form", { 
html: {include: "test_geck_gone_lowest.html"} 
}],

["test_geck_way_distractor", "Form", { 
html: {include: "test_geck_way_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_like_highest", "Form", { 
html: {include: "test_tiz_like_highest.html"} 
}],

["test_tiz_reach_lowest", "Form", { 
html: {include: "test_tiz_reach_lowest.html"} 
}],

["test_tiz_open_distractor", "Form", { 
html: {include: "test_tiz_open_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_wind_highest", "Form", { 
html: {include: "test_bist_wind_highest.html"} 
}],

["test_bist_come_lowest", "Form", { 
html: {include: "test_bist_come_lowest.html"} 
}],

["test_bist_here_distractor", "Form", { 
html: {include: "test_bist_here_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_yummy_highest", "Form", { 
html: {include: "test_jair_yummy_highest.html"} 
}],

["test_jair_grass_lowest", "Form", { 
html: {include: "test_jair_grass_lowest.html"} 
}],

["test_jair_walk_distractor", "Form", { 
html: {include: "test_jair_walk_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_fall_highest", "Form", { 
html: {include: "test_tace_fall_highest.html"} 
}],

["test_tace_here_lowest", "Form", { 
html: {include: "test_tace_here_lowest.html"} 
}],

["test_tace_like_distractor", "Form", { 
html: {include: "test_tace_like_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_toy_highest", "Form", { 
html: {include: "test_doon_toy_highest.html"} 
}],

["test_doon_careful_lowest", "Form", { 
html: {include: "test_doon_careful_lowest.html"} 
}],

["test_doon_hello_distractor", "Form", { 
html: {include: "test_doon_hello_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_way_highest", "Form", { 
html: {include: "test_telpen_way_highest.html"} 
}],

["test_telpen_good_lowest", "Form", { 
html: {include: "test_telpen_good_lowest.html"} 
}],

["test_telpen_watch_distractor", "Form", { 
html: {include: "test_telpen_watch_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_like_highest", "Form", { 
html: {include: "test_blime_like_highest.html"} 
}],

["test_blime_wow_lowest", "Form", { 
html: {include: "test_blime_wow_lowest.html"} 
}],

["test_blime_wind_distractor", "Form", { 
html: {include: "test_blime_wind_distractor.html"} 
}],

["test_zant_mom_target", "Form", { 
html: {include: "test_zant_mom_target.html"} 
}],

["test_zant_walk_highest", "Form", { 
html: {include: "test_zant_walk_highest.html"} 
}],

["test_zant_dad_lowest", "Form", { 
html: {include: "test_zant_dad_lowest.html"} 
}],

["test_zant_yummy_distractor", "Form", { 
html: {include: "test_zant_yummy_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_open_highest", "Form", { 
html: {include: "test_mipen_open_highest.html"} 
}],

["test_mipen_dangle_lowest", "Form", { 
html: {include: "test_mipen_dangle_lowest.html"} 
}],

["test_mipen_simply_distractor", "Form", { 
html: {include: "test_mipen_simply_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];