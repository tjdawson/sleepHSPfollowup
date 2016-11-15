var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tiz_come_distractor","sep",
"test_geck_nose_target","sep",
"test_tace_push_distractor","sep",
"test_tiz_bag_highest","sep",
"test_geck_wipe_lowest","sep",
"test_telpen_toy_highest","sep",
"test_jair_time_target","sep",
"test_jair_push_highest","sep",
"test_geck_juice_highest","sep",
"test_tace_hello_highest","sep",
"test_vash_shoe_target","sep",
"test_jair_pull_lowest","sep",
"test_mipen_appear_distractor","sep",
"test_telpen_ball_target","sep",
"test_zant_light_highest","sep",
"test_jair_toy_distractor","sep",
"test_vash_elephant_lowest","sep",
"test_telpen_truck_lowest","sep",
"test_doon_look_distractor","sep",
"test_blime_within_distractor","sep",
"test_tula_grass_distractor","sep",
"test_mipen_careful_lowest","sep",
"test_doon_necklace_target","sep",
"test_blime_push_highest","sep",
"test_mipen_bag_target","sep",
"test_tula_come_highest","sep",
"test_bist_come_lowest","sep",
"test_blime_toy_target","sep",
"test_doon_why_lowest","sep",
"test_doon_within_highest","sep",
"test_tace_dog_lowest","sep",
"test_blime_close_lowest","sep",
"test_zant_book_target","sep",
"test_tiz_loud_lowest","sep",
"test_tace_phone_target","sep",
"test_zant_come_lowest_filler","sep",
"test_bist_horse_target","sep",
"test_tiz_thing_target","sep",
"test_bist_grass_highest","sep",
"test_vash_juice_distractor","sep",
"test_telpen_light_distractor","sep",
"test_geck_bag_distractor","sep",
"test_zant_success_distractor","sep",
"test_vash_bag_highest","sep",
"test_mipen_look_highest","sep",
"test_tula_careful_lowest","sep",
"test_bist_hello_distractor","sep",
"test_tula_mommy_target","outro1","sr","outro2"
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

["test_tula_careful_lowest", "Form", { 
html: {include: "test_tula_careful_lowest.html"} 
}],

["test_tula_grass_distractor", "Form", { 
html: {include: "test_tula_grass_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bag_highest", "Form", { 
html: {include: "test_vash_bag_highest.html"} 
}],

["test_vash_elephant_lowest", "Form", { 
html: {include: "test_vash_elephant_lowest.html"} 
}],

["test_vash_juice_distractor", "Form", { 
html: {include: "test_vash_juice_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_juice_highest", "Form", { 
html: {include: "test_geck_juice_highest.html"} 
}],

["test_geck_wipe_lowest", "Form", { 
html: {include: "test_geck_wipe_lowest.html"} 
}],

["test_geck_bag_distractor", "Form", { 
html: {include: "test_geck_bag_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_bag_highest", "Form", { 
html: {include: "test_tiz_bag_highest.html"} 
}],

["test_tiz_loud_lowest", "Form", { 
html: {include: "test_tiz_loud_lowest.html"} 
}],

["test_tiz_come_distractor", "Form", { 
html: {include: "test_tiz_come_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_grass_highest", "Form", { 
html: {include: "test_bist_grass_highest.html"} 
}],

["test_bist_come_lowest", "Form", { 
html: {include: "test_bist_come_lowest.html"} 
}],

["test_bist_hello_distractor", "Form", { 
html: {include: "test_bist_hello_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_push_highest", "Form", { 
html: {include: "test_jair_push_highest.html"} 
}],

["test_jair_pull_lowest", "Form", { 
html: {include: "test_jair_pull_lowest.html"} 
}],

["test_jair_toy_distractor", "Form", { 
html: {include: "test_jair_toy_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_hello_highest", "Form", { 
html: {include: "test_tace_hello_highest.html"} 
}],

["test_tace_dog_lowest", "Form", { 
html: {include: "test_tace_dog_lowest.html"} 
}],

["test_tace_push_distractor", "Form", { 
html: {include: "test_tace_push_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_within_highest", "Form", { 
html: {include: "test_doon_within_highest.html"} 
}],

["test_doon_why_lowest", "Form", { 
html: {include: "test_doon_why_lowest.html"} 
}],

["test_doon_look_distractor", "Form", { 
html: {include: "test_doon_look_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_toy_highest", "Form", { 
html: {include: "test_telpen_toy_highest.html"} 
}],

["test_telpen_truck_lowest", "Form", { 
html: {include: "test_telpen_truck_lowest.html"} 
}],

["test_telpen_light_distractor", "Form", { 
html: {include: "test_telpen_light_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_push_highest", "Form", { 
html: {include: "test_blime_push_highest.html"} 
}],

["test_blime_close_lowest", "Form", { 
html: {include: "test_blime_close_lowest.html"} 
}],

["test_blime_within_distractor", "Form", { 
html: {include: "test_blime_within_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_light_highest", "Form", { 
html: {include: "test_zant_light_highest.html"} 
}],

["test_zant_come_lowest_filler", "Form", { 
html: {include: "test_zant_come_lowest_filler.html"} 
}],

["test_zant_success_distractor", "Form", { 
html: {include: "test_zant_success_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_look_highest", "Form", { 
html: {include: "test_mipen_look_highest.html"} 
}],

["test_mipen_careful_lowest", "Form", { 
html: {include: "test_mipen_careful_lowest.html"} 
}],

["test_mipen_appear_distractor", "Form", { 
html: {include: "test_mipen_appear_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];