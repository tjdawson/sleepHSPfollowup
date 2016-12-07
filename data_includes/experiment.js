var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tiz_spill_distractor","sep",
"test_tiz_thing_target","sep",
"test_vash_try_distractor","sep",
"test_doon_necklace_target","sep",
"test_bist_horse_target","sep",
"test_vash_elephant_highest","sep",
"test_tula_face_distractor","sep",
"test_tula_na_lowest","sep",
"test_blime_toy_target","sep",
"test_geck_face_highest","sep",
"test_blime_look_highest","sep",
"test_vash_shoe_target","sep",
"test_zant_another_highest","sep",
"test_jair_another_distractor","sep",
"test_mipen_here_distractor","sep",
"test_telpen_ball_target","sep",
"test_geck_na_lowest","sep",
"test_tula_spill_highest","sep",
"test_zant_elephant_distractor","sep",
"test_telpen_na_lowest","sep",
"test_tace_telephone_target","sep",
"test_doon_around_highest","sep",
"test_telpen_catch_highest","sep",
"test_geck_nose_target","sep",
"test_jair_tangled_lowest","sep",
"test_mipen_water_highest","sep",
"test_jair_time_target","sep",
"test_vash_na_lowest","sep",
"test_tace_talk_highest","sep",
"test_tace_na_lowest","sep",
"test_bist_here_highest","sep",
"test_tiz_na_lowest","sep",
"test_jair_open_highest","sep",
"test_doon_na_lowest","sep",
"test_tace_around_distractor","sep",
"test_doon_talk_distractor","sep",
"test_tiz_try_highest","sep",
"test_geck_open_distractor","sep",
"test_blime_catch_distractor","sep",
"test_zant_na_lowest","sep",
"test_mipen_there_lowest","sep",
"test_tula_mommy_target","sep",
"test_telpen_water_distractor","sep",
"test_bist_na_lowest","sep",
"test_bist_look_distractor","sep",
"test_zant_book_target","sep",
"test_blime_na_lowest","sep",
"test_mipen_bag_target","outro1","sr","outro2"
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

["test_tula_spill_highest", "Form", { 
html: {include: "test_tula_spill_highest.html"} 
}],

["test_tula_na_lowest", "Form", { 
html: {include: "test_tula_na_lowest.html"} 
}],

["test_tula_face_distractor", "Form", { 
html: {include: "test_tula_face_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_elephant_highest", "Form", { 
html: {include: "test_vash_elephant_highest.html"} 
}],

["test_vash_na_lowest", "Form", { 
html: {include: "test_vash_na_lowest.html"} 
}],

["test_vash_try_distractor", "Form", { 
html: {include: "test_vash_try_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_face_highest", "Form", { 
html: {include: "test_geck_face_highest.html"} 
}],

["test_geck_na_lowest", "Form", { 
html: {include: "test_geck_na_lowest.html"} 
}],

["test_geck_open_distractor", "Form", { 
html: {include: "test_geck_open_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_try_highest", "Form", { 
html: {include: "test_tiz_try_highest.html"} 
}],

["test_tiz_na_lowest", "Form", { 
html: {include: "test_tiz_na_lowest.html"} 
}],

["test_tiz_spill_distractor", "Form", { 
html: {include: "test_tiz_spill_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_here_highest", "Form", { 
html: {include: "test_bist_here_highest.html"} 
}],

["test_bist_na_lowest", "Form", { 
html: {include: "test_bist_na_lowest.html"} 
}],

["test_bist_look_distractor", "Form", { 
html: {include: "test_bist_look_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_open_highest", "Form", { 
html: {include: "test_jair_open_highest.html"} 
}],

["test_jair_tangled_lowest", "Form", { 
html: {include: "test_jair_tangled_lowest.html"} 
}],

["test_jair_another_distractor", "Form", { 
html: {include: "test_jair_another_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_talk_highest", "Form", { 
html: {include: "test_tace_talk_highest.html"} 
}],

["test_tace_na_lowest", "Form", { 
html: {include: "test_tace_na_lowest.html"} 
}],

["test_tace_around_distractor", "Form", { 
html: {include: "test_tace_around_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_around_highest", "Form", { 
html: {include: "test_doon_around_highest.html"} 
}],

["test_doon_na_lowest", "Form", { 
html: {include: "test_doon_na_lowest.html"} 
}],

["test_doon_talk_distractor", "Form", { 
html: {include: "test_doon_talk_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_catch_highest", "Form", { 
html: {include: "test_telpen_catch_highest.html"} 
}],

["test_telpen_na_lowest", "Form", { 
html: {include: "test_telpen_na_lowest.html"} 
}],

["test_telpen_water_distractor", "Form", { 
html: {include: "test_telpen_water_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_look_highest", "Form", { 
html: {include: "test_blime_look_highest.html"} 
}],

["test_blime_na_lowest", "Form", { 
html: {include: "test_blime_na_lowest.html"} 
}],

["test_blime_catch_distractor", "Form", { 
html: {include: "test_blime_catch_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_another_highest", "Form", { 
html: {include: "test_zant_another_highest.html"} 
}],

["test_zant_na_lowest", "Form", { 
html: {include: "test_zant_na_lowest.html"} 
}],

["test_zant_elephant_distractor", "Form", { 
html: {include: "test_zant_elephant_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_water_highest", "Form", { 
html: {include: "test_mipen_water_highest.html"} 
}],

["test_mipen_there_lowest", "Form", { 
html: {include: "test_mipen_there_lowest.html"} 
}],

["test_mipen_here_distractor", "Form", { 
html: {include: "test_mipen_here_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];