var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_telpen_Piccolo_lowest","sep",
"test_bist_Dog_lowest","sep",
"test_tula_mommy_target","sep",
"test_bist_Horse_highest","sep",
"test_vash_shoe_target","sep",
"test_jair_Bag_lowest","sep",
"test_zant_Hold_lowest","sep",
"test_zant_Book_highest","sep",
"test_blime_Spill_lowest","sep",
"test_blime_toy_target","sep",
"test_tula_Shoe_distractor","sep",
"test_geck_Bag_distractor","sep",
"test_tace_Bag_distractor","sep",
"test_telpen_Phone_distractor","sep",
"test_tiz_thing_target","sep",
"test_blime_Push_highest","sep",
"test_doon_Horse_distractor","sep",
"test_tula_Spill_highest","sep",
"test_geck_Finger_lowest","sep",
"test_jair_Phone_distractor","sep",
"test_mipen_Bag_highest","sep",
"test_zant_Shoe_distractor","sep",
"test_bist_horse_target","sep",
"test_tiz_Push_distractor","sep",
"test_mipen_Book_distractor","sep",
"test_tula_Window_lowest","sep",
"test_vash_Truck_lowest","sep",
"test_tace_Phone_highest","sep",
"test_mipen_bag_target","sep",
"test_blime_Ball_distractor","sep",
"test_tiz_Play_highest","sep",
"test_geck_nose_target","sep",
"test_doon_Wear_lowest","sep",
"test_jair_Fall_highest","sep",
"test_tiz_Up_lowest","sep",
"test_vash_Bag_distractor","sep",
"test_telpen_ball_target","sep",
"test_vash_Shoe_highest","sep",
"test_bist_Shoe_distractor","sep",
"test_geck_Horse_highest","sep",
"test_tace_Fall_lowest","sep",
"test_doon_necklace_target","sep",
"test_mipen_Thirsty_lowest","sep",
"test_telpen_Ball_highest","sep",
"test_doon_Doll_highest","sep",
"test_zant_book_target","sep",
"test_jair_time_target","sep",
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
	continueMessage: null
        } ],
        
        //
["test_tula_mommy_target", "Form", { 
html: {include: "test_tula_mommy_target.html"} 
}],

["test_tula_Spill_highest", "Form", { 
html: {include: "test_tula_Spill_highest.html"} 
}],

["test_tula_Window_lowest", "Form", { 
html: {include: "test_tula_Window_lowest.html"} 
}],

["test_tula_Play_distractor", "Form", { 
html: {include: "test_tula_Play_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_Shoe_highest", "Form", { 
html: {include: "test_vash_Shoe_highest.html"} 
}],

["test_vash_Truck_lowest", "Form", { 
html: {include: "test_vash_Truck_lowest.html"} 
}],

["test_vash_Fall_distractor", "Form", { 
html: {include: "test_vash_Fall_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_Bag_highest", "Form", { 
html: {include: "test_mipen_Bag_highest.html"} 
}],

["test_mipen_Thirsty_lowest", "Form", { 
html: {include: "test_mipen_Thirsty_lowest.html"} 
}],

["test_mipen_Play_distractor", "Form", { 
html: {include: "test_mipen_Play_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_Ball_highest", "Form", { 
html: {include: "test_telpen_Ball_highest.html"} 
}],

["test_telpen_Piccolo_lowest", "Form", { 
html: {include: "test_telpen_Piccolo_lowest.html"} 
}],

["test_telpen_Phone_distractor", "Form", { 
html: {include: "test_telpen_Phone_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_Play_highest", "Form", { 
html: {include: "test_tiz_Play_highest.html"} 
}],

["test_tiz_Up_lowest", "Form", { 
html: {include: "test_tiz_Up_lowest.html"} 
}],

["test_tiz_Fall_distractor", "Form", { 
html: {include: "test_tiz_Fall_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_Horse_highest", "Form", { 
html: {include: "test_bist_Horse_highest.html"} 
}],

["test_bist_Dog_lowest", "Form", { 
html: {include: "test_bist_Dog_lowest.html"} 
}],

["test_bist_Play_distractor", "Form", { 
html: {include: "test_bist_Play_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_Fall_highest", "Form", { 
html: {include: "test_jair_Fall_highest.html"} 
}],

["test_jair_Bag_lowest", "Form", { 
html: {include: "test_jair_Bag_lowest.html"} 
}],

["test_jair_Horse_distractor", "Form", { 
html: {include: "test_jair_Horse_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_Doll_highest", "Form", { 
html: {include: "test_doon_Doll_highest.html"} 
}],

["test_doon_Wear_lowest", "Form", { 
html: {include: "test_doon_Wear_lowest.html"} 
}],

["test_doon_Shoe_distractor", "Form", { 
html: {include: "test_doon_Shoe_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_Horse_highest", "Form", { 
html: {include: "test_geck_Horse_highest.html"} 
}],

["test_geck_Finger_lowest", "Form", { 
html: {include: "test_geck_Finger_lowest.html"} 
}],

["test_geck_Shoe_distractor", "Form", { 
html: {include: "test_geck_Shoe_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_Push_highest", "Form", { 
html: {include: "test_blime_Push_highest.html"} 
}],

["test_blime_Spill_lowest", "Form", { 
html: {include: "test_blime_Spill_lowest.html"} 
}],

["test_blime_Horse_distractor", "Form", { 
html: {include: "test_blime_Horse_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_Book_highest", "Form", { 
html: {include: "test_zant_Book_highest.html"} 
}],

["test_zant_Hold_lowest", "Form", { 
html: {include: "test_zant_Hold_lowest.html"} 
}],

["test_zant_Horse_distractor", "Form", { 
html: {include: "test_zant_Horse_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_Phone_highest", "Form", { 
html: {include: "test_tace_Phone_highest.html"} 
}],

["test_tace_Fall_lowest", "Form", { 
html: {include: "test_tace_Fall_lowest.html"} 
}],

["test_tace_Spill_distractor", "Form", { 
html: {include: "test_tace_Spill_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];