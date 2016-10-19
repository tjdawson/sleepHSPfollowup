var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_telpen_toy_lowest","sep",
"test_vash_shoe_target","sep",
"test_doon_necklace_distractor","sep",
"test_tiz_bag_highest","sep",
"test_blime_wipe_highest","sep",
"test_blime_roll_lowest","sep",
"test_zant_light_highest","sep",
"test_geck_finish_lowest","sep",
"test_bist_dog_highest","sep",
"test_geck_mom_target","sep",
"test_jair_necklace_highest","sep",
"test_mipen_bag_target","sep",
"test_doon_necklace_target","sep",
"test_doon_baby_highest","sep",
"test_mipen_baby_highest","sep",
"test_mipen_purse_lowest","sep",
"test_geck_truck_distractor","sep",
"test_telpen_ball_target","sep",
"test_tiz_thing_target","sep",
"test_doon_baby_lowest","sep",
"test_tiz_pillow_lowest_filler","sep",
"test_mipen_light_distractor","sep",
"test_tula_come_highest","sep",
"test_tula_baby_distractor","sep",
"test_blime_bag_distractor","sep",
"test_tula_phone_lowest","sep",
"test_tace_pillow_highest","sep",
"test_jair_fall_lowest","sep",
"test_bist_horse_target","sep",
"test_zant_book_target","sep",
"test_bist_outdoors_lowest","sep",
"test_tiz_dog_distractor","sep",
"test_jair_more_distractor","sep",
"test_jair_time_target","sep",
"test_vash_truck_highest","sep",
"test_geck_horse_highest","sep",
"test_zant_here_lowest","sep",
"test_vash_pillow_distractor","sep",
"test_telpen_more_highest","sep",
"test_blime_toy_target","sep",
"test_tace_horse_distractor","sep",
"test_tace_pillow_lowest","sep",
"test_bist_wipe_distractor","sep",
"test_zant_on_distractor","sep",
"test_vash_teddybear_lowest","sep",
"test_telpen_come_distractor","sep",
"test_tula_mommy_target","sep",
"test_tace_telephone_target","outro1","sr","outro2"
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

["test_tula_phone_lowest", "Form", { 
html: {include: "test_tula_phone_lowest.html"} 
}],

["test_tula_baby_distractor", "Form", { 
html: {include: "test_tula_baby_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_truck_highest", "Form", { 
html: {include: "test_vash_truck_highest.html"} 
}],

["test_vash_teddybear_lowest", "Form", { 
html: {include: "test_vash_teddybear_lowest.html"} 
}],

["test_vash_pillow_distractor", "Form", { 
html: {include: "test_vash_pillow_distractor.html"} 
}],

["test_geck_mom_target", "Form", { 
html: {include: "test_geck_mom_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_finish_lowest", "Form", { 
html: {include: "test_geck_finish_lowest.html"} 
}],

["test_geck_truck_distractor", "Form", { 
html: {include: "test_geck_truck_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_bag_highest", "Form", { 
html: {include: "test_tiz_bag_highest.html"} 
}],

["test_tiz_pillow_lowest_filler", "Form", { 
html: {include: "test_tiz_pillow_lowest_filler.html"} 
}],

["test_tiz_dog_distractor", "Form", { 
html: {include: "test_tiz_dog_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_dog_highest", "Form", { 
html: {include: "test_bist_dog_highest.html"} 
}],

["test_bist_outdoors_lowest", "Form", { 
html: {include: "test_bist_outdoors_lowest.html"} 
}],

["test_bist_wipe_distractor", "Form", { 
html: {include: "test_bist_wipe_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_necklace_highest", "Form", { 
html: {include: "test_jair_necklace_highest.html"} 
}],

["test_jair_fall_lowest", "Form", { 
html: {include: "test_jair_fall_lowest.html"} 
}],

["test_jair_more_distractor", "Form", { 
html: {include: "test_jair_more_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_pillow_highest", "Form", { 
html: {include: "test_tace_pillow_highest.html"} 
}],

["test_tace_pillow_lowest", "Form", { 
html: {include: "test_tace_pillow_lowest.html"} 
}],

["test_tace_horse_distractor", "Form", { 
html: {include: "test_tace_horse_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_baby_highest", "Form", { 
html: {include: "test_doon_baby_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_necklace_distractor", "Form", { 
html: {include: "test_doon_necklace_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_more_highest", "Form", { 
html: {include: "test_telpen_more_highest.html"} 
}],

["test_telpen_toy_lowest", "Form", { 
html: {include: "test_telpen_toy_lowest.html"} 
}],

["test_telpen_come_distractor", "Form", { 
html: {include: "test_telpen_come_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_wipe_highest", "Form", { 
html: {include: "test_blime_wipe_highest.html"} 
}],

["test_blime_roll_lowest", "Form", { 
html: {include: "test_blime_roll_lowest.html"} 
}],

["test_blime_bag_distractor", "Form", { 
html: {include: "test_blime_bag_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_light_highest", "Form", { 
html: {include: "test_zant_light_highest.html"} 
}],

["test_zant_here_lowest", "Form", { 
html: {include: "test_zant_here_lowest.html"} 
}],

["test_zant_on_distractor", "Form", { 
html: {include: "test_zant_on_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_baby_highest", "Form", { 
html: {include: "test_mipen_baby_highest.html"} 
}],

["test_mipen_purse_lowest", "Form", { 
html: {include: "test_mipen_purse_lowest.html"} 
}],

["test_mipen_light_distractor", "Form", { 
html: {include: "test_mipen_light_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];