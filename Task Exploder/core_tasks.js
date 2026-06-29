window.TASK_DATA = {
  app_name: "Task Exploder",
  version: "2.2",
  last_updated: "2026-06-11",
  categories: [
    {
      category_id: 1,
      category_code: "kitchen",
      category_name: "Kitchen",
      branches: [
        {
          branch_id: "k_sink_reset",
          branch_name: "Sink Reset",
          twigs: [
            { id: 1, text: "Grab just 3 forks or spoons from the sink and put them away.", tier: "low" },
            { id: 2, text: "Stack a few plates together so they take up less space.", tier: "low" },
            { id: 3, text: "Find 1 old scrap of food on the counter and toss it out.", tier: "low" },
            { id: 4, text: "Fill the heaviest pan with warm water and soap to let it soak.", tier: "normal" },
            { id: 5, text: "Give a small section of the counter a quick wipe.", tier: "normal" },
            { id: 6, text: "Give the bottom of the sink a quick scrub.", tier: "high" },
            { id: 7, text: "Wipe down the faucet handles real quick.", tier: "high" },
            { id: 8, text: "Empty out the sink strainer into the garbage.", tier: "high" },
            { id: 9, text: "Hang up a fresh, dry dish towel.", tier: "high" }
          ]
        },
        {
          branch_id: "k_counter_reset",
          branch_name: "Counter Reset",
          twigs: [
            { id: 1, text: "Pick up 2 cups or glasses and drop them off near the sink.", tier: "low" },
            { id: 2, text: "Clear off just a tiny patch of counter space.", tier: "low" },
            { id: 3, text: "Grab 3 pieces of obvious garbage and chuck them.", tier: "low" },
            { id: 4, text: "Put away a couple of stray spices or condiments.", tier: "normal" },
            { id: 5, text: "Give that newly cleared patch of counter a quick wipe down.", tier: "normal" },
            { id: 6, text: "Wipe down the main high-traffic sections of the counter.", tier: "high" },
            { id: 7, text: "Grab 3 random items and put them back in the cabinets.", tier: "high" },
            { id: 8, text: "Wipe down the wall or backsplash behind the stove.", tier: "high" },
            { id: 9, text: "Straighten up the dish rack or drying mat real quick.", tier: "high" }
          ]
        },
        {
          branch_id: "k_stove_wipe",
          branch_name: "Stove Surface Wipe",
          twigs: [
            { id: 1, text: "Move a couple of things off the stovetop.", tier: "low" },
            { id: 2, text: "Give the front panel where the knobs are a quick wipe.", tier: "low" },
            { id: 3, text: "Wipe down just the left burner area.", tier: "low" },
            { id: 4, text: "Wipe down just the right burner area.", tier: "normal" },
            { id: 5, text: "Put those items you moved back onto the stove.", tier: "normal" },
            { id: 6, text: "Lift up the grates and shake off any loose crumbs.", tier: "high" },
            { id: 7, text: "Give the stove knobs a quick clean.", tier: "high" },
            { id: 8, text: "Give the whole stove top one clean wipe all the way across.", tier: "high" },
            { id: 9, text: "Wipe down the handle on the oven door.", tier: "high" }
          ]
        },
        {
          branch_id: "k_fridge_purge",
          branch_name: "Fridge Quick Purge",
          twigs: [
            { id: 1, text: "Take a quick peek at the top shelf.", tier: "low" },
            { id: 2, text: "Spot 1 item that's past its prime and toss it.", tier: "low" },
            { id: 3, text: "Find 1 old container of leftovers and throw it away.", tier: "low" },
            { id: 4, text: "Wipe up any small spill or sticky spot you see.", tier: "normal" },
            { id: 5, text: "Shut the fridge door — you're good for this step.", tier: "normal" },
            { id: 6, text: "Ditch 1 condiment you know nobody is going to use.", tier: "high" },
            { id: 7, text: "Give the outside handle of the fridge a quick wipe.", tier: "high" },
            { id: 8, text: "Wipe down the front edge of the top shelf.", tier: "high" },
            { id: 9, text: "Straighten up a few bottles sitting on the door shelves.", tier: "high" }
          ]
        },
        {
          branch_id: "k_floor_sweep",
          branch_name: "Floor Quick Sweep",
          twigs: [
            { id: 1, text: "Pick up 3 loose things off the kitchen floor.", tier: "low" },
            { id: 2, text: "Sweep up just the floor area right in front of the sink.", tier: "low" },
            { id: 3, text: "Empty out the dustpan into the garbage.", tier: "low" },
            { id: 4, text: "Get the broom under the edge of the kitchen table real quick.", tier: "normal" },
            { id: 5, text: "Take a pause right here — that's plenty for now.", tier: "normal" },
            { id: 6, text: "Sweep the main pathway between the sink and the stove.", tier: "high" },
            { id: 7, text: "Give the kitchen doorway area a quick sweep.", tier: "high" },
            { id: 8, text: "Take the kitchen mat outside or over the bin for a quick shake.", tier: "high" },
            { id: 9, text: "Give the area around the bin a quick sweep.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 2,
      category_code: "bathroom",
      category_name: "Bathroom",
      branches: [
        {
          branch_id: "b_sink_counter",
          branch_name: "Sink & Counter Reset",
          twigs: [
            { id: 1, text: "Move 3 things off the bathroom counter.", tier: "low" },
            { id: 2, text: "Give the faucet handles a quick swipe.", tier: "low" },
            { id: 3, text: "Wipe down just the immediate area around the drain.", tier: "low" },
            { id: 4, text: "Put a couple of those items back where they belong.", tier: "normal" },
            { id: 5, text: "Hang up a fresh hand towel.", tier: "normal" },
            { id: 6, text: "Move a few more stray items off the counter space.", tier: "high" },
            { id: 7, text: "Give the whole counter surface a quick wipe.", tier: "high" },
            { id: 8, text: "Wipe the worst water spots off the mirror.", tier: "high" },
            { id: 9, text: "Toss away any empty bottles or tubes.", tier: "high" }
          ]
        },
        {
          branch_id: "b_toilet_clean",
          branch_name: "Toilet Quick Clean",
          twigs: [
            { id: 1, text: "Give the toilet a quick flush.", tier: "low" },
            { id: 2, text: "Wipe down the seat with a cleaning wipe.", tier: "low" },
            { id: 3, text: "Give the flush handle a quick swipe.", tier: "low" },
            { id: 4, text: "Give the inside of the bowl a quick pass with the brush.", tier: "normal" },
            { id: 5, text: "Wipe down the top of the lid.", tier: "normal" },
            { id: 6, text: "Wipe around the outside base of the toilet.", tier: "high" },
            { id: 7, text: "Grab the empty cardboard roll and toss it.", tier: "high" },
            { id: 8, text: "Put a fresh roll of toilet paper on the holder.", tier: "high" },
            { id: 9, text: "Give the top of the tank a quick wipe.", tier: "high" }
          ]
        },
        {
          branch_id: "b_shower_reset",
          branch_name: "Shower / Tub Reset",
          twigs: [
            { id: 1, text: "Pick up 2 bottles from the bottom of the tub or ledge.", tier: "low" },
            { id: 2, text: "Use the showerhead or a cup to rinse the walls down.", tier: "low" },
            { id: 3, text: "Hang up your washcloth or loofah cleanly.", tier: "low" },
            { id: 4, text: "Wipe down the shower ledge real quick.", tier: "normal" },
            { id: 5, text: "Find 1 empty bottle and throw it out.", tier: "normal" },
            { id: 6, text: "Give the floor of the tub a quick scrub.", tier: "high" },
            { id: 7, text: "Wipe down the main shower faucet.", tier: "high" },
            { id: 8, text: "Line up 3 bottles neatly on the shelf.", tier: "high" },
            { id: 9, text: "Give the whole tub a final quick rinse.", tier: "high" }
          ]
        },
        {
          branch_id: "b_trash_towels",
          branch_name: "Trash & Towels",
          twigs: [
            { id: 1, text: "Tie up the bathroom garbage bag.", tier: "low" },
            { id: 2, text: "Put a fresh, empty bag into the can.", tier: "low" },
            { id: 3, text: "Switch out the old hand towel for a fresh one.", tier: "low" },
            { id: 4, text: "Fold 1 towel and place it back on the rack.", tier: "normal" },
            { id: 5, text: "Put 2 stray bottles back inside the cabinet.", tier: "normal" },
            { id: 6, text: "Grab any empty containers and throw them away.", tier: "high" },
            { id: 7, text: "Wipe down the lid of the garbage can.", tier: "high" },
            { id: 8, text: "Straighten up a few things sitting out on the counter.", tier: "high" },
            { id: 9, text: "Give the bath mat a quick shake.", tier: "high" }
          ]
        },
        {
          branch_id: "b_quick_reset",
          branch_name: "Bathroom Quick Reset",
          twigs: [
            { id: 1, text: "Pick up 3 random things from the floor.", tier: "low" },
            { id: 2, text: "Give the bathroom sink a quick swipe.", tier: "low" },
            { id: 3, text: "Pull the shower curtain straight across.", tier: "low" },
            { id: 4, text: "Wipe down the main spot on the counter.", tier: "normal" },
            { id: 5, text: "Put 2 stray items away into drawers.", tier: "normal" },
            { id: 6, text: "Give the mirror a quick wipe down.", tier: "high" },
            { id: 7, text: "Give the main floor walkway a quick sweep.", tier: "high" },
            { id: 8, text: "Toss out 1 old product you don't use anymore.", tier: "high" },
            { id: 9, text: "Wipe down the inside doorknob.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 3,
      category_code: "living_room",
      category_name: "Living Room",
      branches: [
        {
          branch_id: "lr_surface_reset",
          branch_name: "Surface Reset",
          twigs: [
            { id: 1, text: "Fold 1 blanket and toss it over the back of the couch.", tier: "low" },
            { id: 2, text: "Gather the remotes and set them down together.", tier: "low" },
            { id: 3, text: "Grab a couple of empty cups and bring them out to the kitchen.", tier: "low" },
            { id: 4, text: "Clear off a small patch on the coffee table.", tier: "normal" },
            { id: 5, text: "Give that cleared section of the table a quick wipe.", tier: "normal" },
            { id: 6, text: "Clear off another small section of the table.", tier: "high" },
            { id: 7, text: "Grab 3 random items that belong in another room and set them aside.", tier: "high" },
            { id: 8, text: "Dust off the top of the TV stand real quick.", tier: "high" },
            { id: 9, text: "Straighten up a couple of decorations or frames.", tier: "high" }
          ]
        },
        {
          branch_id: "lr_floor_reset",
          branch_name: "Floor Reset",
          twigs: [
            { id: 1, text: "Pick up 5 random things from the living room floor.", tier: "low" },
            { id: 2, text: "Line up a couple of pairs of shoes neatly by the door.", tier: "low" },
            { id: 3, text: "Give 1 small area rug a quick shake.", tier: "low" },
            { id: 4, text: "Run the vacuum over the main open space for just a minute.", tier: "normal" },
            { id: 5, text: "Take a breather right here — you've done plenty.", tier: "normal" },
            { id: 6, text: "Vacuum along the edges of the room real quick.", tier: "high" },
            { id: 7, text: "Pick up another handful of loose items from the floor.", tier: "high" },
            { id: 8, text: "Carry the items from other rooms back where they belong.", tier: "high" },
            { id: 9, text: "Give the rug a quick vacuum pass.", tier: "high" }
          ]
        },
        {
          branch_id: "lr_couch_reset",
          branch_name: "Couch Reset",
          twigs: [
            { id: 1, text: "Pull all the cushions off and set them aside.", tier: "low" },
            { id: 2, text: "Fish out any obvious rubbish hiding in the cushion gaps.", tier: "low" },
            { id: 3, text: "Put the cushions back in place.", tier: "low" },
            { id: 4, text: "Fold any blankets and drape them neatly.", tier: "normal" },
            { id: 5, text: "Fluff up 2 or 3 pillows and arrange them.", tier: "normal" },
            { id: 6, text: "Give the couch surface a quick wipe or brush down.", tier: "high" },
            { id: 7, text: "Tuck a spare blanket into the corner of the couch neatly.", tier: "high" },
            { id: 8, text: "Grab any mugs or snack bowls from beside the couch.", tier: "high" },
            { id: 9, text: "Vacuum between the cushions properly.", tier: "high" }
          ]
        },
        {
          branch_id: "lr_tv_reset",
          branch_name: "TV / Media Reset",
          twigs: [
            { id: 1, text: "Gather all the remotes into one spot.", tier: "low" },
            { id: 2, text: "Tuck any loose cables behind the TV stand.", tier: "low" },
            { id: 3, text: "Remove any cups or plates sitting near the TV.", tier: "low" },
            { id: 4, text: "Give the TV screen a gentle wipe with a dry cloth.", tier: "normal" },
            { id: 5, text: "Straighten anything sitting on top of the TV unit.", tier: "normal" },
            { id: 6, text: "Dust the top of the TV unit properly.", tier: "high" },
            { id: 7, text: "Tidy up any game cases or streaming devices.", tier: "high" },
            { id: 8, text: "Bundle up any messy cables with a clip or tie.", tier: "high" },
            { id: 9, text: "Wipe down the TV stand shelves.", tier: "high" }
          ]
        },
        {
          branch_id: "lr_quick_reset",
          branch_name: "Living Room Quick Reset",
          twigs: [
            { id: 1, text: "Pick up anything that's obviously out of place.", tier: "low" },
            { id: 2, text: "Straighten the cushions on the couch.", tier: "low" },
            { id: 3, text: "Carry any dishes to the kitchen.", tier: "low" },
            { id: 4, text: "Give the coffee table a quick wipe.", tier: "normal" },
            { id: 5, text: "Fold 1 blanket and put it away.", tier: "normal" },
            { id: 6, text: "Run the vacuum over the main floor area.", tier: "high" },
            { id: 7, text: "Dust the most visible surfaces.", tier: "high" },
            { id: 8, text: "Take anything that belongs in another room and put it back.", tier: "high" },
            { id: 9, text: "Give the room a final look and fix anything obvious.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 4,
      category_code: "bedroom",
      category_name: "Bedroom",
      branches: [
        {
          branch_id: "bd_bed_reset",
          branch_name: "Bed Reset",
          twigs: [
            { id: 1, text: "Pull the duvet or blanket up over the bed roughly.", tier: "low" },
            { id: 2, text: "Straighten the pillow at the top.", tier: "low" },
            { id: 3, text: "Tuck in any sheets hanging out at the sides.", tier: "low" },
            { id: 4, text: "Smooth out the duvet so it looks even.", tier: "normal" },
            { id: 5, text: "Arrange the pillows properly.", tier: "normal" },
            { id: 6, text: "Remove any clothes or items from on top of the bed.", tier: "high" },
            { id: 7, text: "Shake the duvet out properly.", tier: "high" },
            { id: 8, text: "Tuck the sheets in neatly on both sides.", tier: "high" },
            { id: 9, text: "Put any spare blankets at the foot of the bed neatly.", tier: "high" }
          ]
        },
        {
          branch_id: "bd_nightstand_reset",
          branch_name: "Nightstand Reset",
          twigs: [
            { id: 1, text: "Grab any cups or glasses from the nightstand.", tier: "low" },
            { id: 2, text: "Throw away any obvious rubbish like wrappers or tissues.", tier: "low" },
            { id: 3, text: "Stack any books or magazines into a tidy pile.", tier: "low" },
            { id: 4, text: "Put your phone charger cable somewhere tidy.", tier: "normal" },
            { id: 5, text: "Give the nightstand surface a quick wipe.", tier: "normal" },
            { id: 6, text: "Clear everything off and wipe the whole surface properly.", tier: "high" },
            { id: 7, text: "Open the nightstand drawer and toss 3 things you don't need.", tier: "high" },
            { id: 8, text: "Put items back on the nightstand — only the ones you actually use.", tier: "high" },
            { id: 9, text: "Dust the lamp or light on the nightstand.", tier: "high" }
          ]
        },
        {
          branch_id: "bd_clothes_reset",
          branch_name: "Clothes Reset",
          twigs: [
            { id: 1, text: "Grab 3 items of clothing from the floor.", tier: "low" },
            { id: 2, text: "Decide quickly — clean or dirty? Put each one in the right place.", tier: "low" },
            { id: 3, text: "Hang up 1 item that just needs hanging, not washing.", tier: "low" },
            { id: 4, text: "Gather any dirty clothes into one spot or the laundry basket.", tier: "normal" },
            { id: 5, text: "Fold 2 clean items and put them away.", tier: "normal" },
            { id: 6, text: "Clear all clothes off the bedroom chair or floor.", tier: "high" },
            { id: 7, text: "Hang up everything that can be hung.", tier: "high" },
            { id: 8, text: "Put folded items into their proper drawer.", tier: "high" },
            { id: 9, text: "Take the laundry basket to the laundry area.", tier: "high" }
          ]
        },
        {
          branch_id: "bd_floor_reset",
          branch_name: "Floor Reset",
          twigs: [
            { id: 1, text: "Pick up 5 things from the bedroom floor.", tier: "low" },
            { id: 2, text: "Put your shoes in a tidy spot.", tier: "low" },
            { id: 3, text: "Kick any rubbish into one corner to deal with.", tier: "low" },
            { id: 4, text: "Clear the path between the door and the bed.", tier: "normal" },
            { id: 5, text: "Pick up that rubbish you kicked into the corner and bin it.", tier: "normal" },
            { id: 6, text: "Clear the rest of the floor properly.", tier: "high" },
            { id: 7, text: "Run the vacuum or mop over the main floor area.", tier: "high" },
            { id: 8, text: "Get under the bed edge with the vacuum.", tier: "high" },
            { id: 9, text: "Straighten the rug if there is one.", tier: "high" }
          ]
        },
        {
          branch_id: "bd_quick_reset",
          branch_name: "Bedroom Quick Reset",
          twigs: [
            { id: 1, text: "Make the bed roughly — just pull it up.", tier: "low" },
            { id: 2, text: "Pick 5 things up off the floor.", tier: "low" },
            { id: 3, text: "Remove any dishes or cups and take them to the kitchen.", tier: "low" },
            { id: 4, text: "Clear off the nightstand surface.", tier: "normal" },
            { id: 5, text: "Get any dirty clothes into the basket.", tier: "normal" },
            { id: 6, text: "Give the floor a proper clear.", tier: "high" },
            { id: 7, text: "Open the curtains or blinds to let some light in.", tier: "high" },
            { id: 8, text: "Wipe down the most obvious dusty surface.", tier: "high" },
            { id: 9, text: "Take a breath — bedroom is done.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 5,
      category_code: "laundry",
      category_name: "Laundry",
      branches: [
        {
          branch_id: "l_start_load",
          branch_name: "Start a Load",
          twigs: [
            { id: 1, text: "Grab the laundry basket and carry it to the machine.", tier: "low" },
            { id: 2, text: "Sort out 1 quick load — darks or lights, whichever is fuller.", tier: "low" },
            { id: 3, text: "Check pockets on anything before it goes in.", tier: "low" },
            { id: 4, text: "Load the clothes into the machine.", tier: "normal" },
            { id: 5, text: "Add the detergent in the right drawer or compartment.", tier: "normal" },
            { id: 6, text: "Pick the right wash cycle for the load.", tier: "high" },
            { id: 7, text: "Press start and set a reminder for when it finishes.", tier: "high" },
            { id: 8, text: "While you wait, clear any clutter from around the machine.", tier: "high" },
            { id: 9, text: "Wipe down the outside of the washing machine.", tier: "high" }
          ]
        },
        {
          branch_id: "l_switch_load",
          branch_name: "Switch Load",
          twigs: [
            { id: 1, text: "Open the washing machine door.", tier: "low" },
            { id: 2, text: "Pull out the top few items and check they smell fresh.", tier: "low" },
            { id: 3, text: "Move the wet clothes over to the dryer or drying area.", tier: "low" },
            { id: 4, text: "Shake each item out before hanging or placing it.", tier: "normal" },
            { id: 5, text: "Make sure nothing is still bunched up or twisted.", tier: "normal" },
            { id: 6, text: "Start the dryer or hang the last few items.", tier: "high" },
            { id: 7, text: "Clean the dryer lint trap while you're there.", tier: "high" },
            { id: 8, text: "Load the next dirty load into the washer if there is one.", tier: "high" },
            { id: 9, text: "Set a reminder for when the dryer finishes.", tier: "high" }
          ]
        },
        {
          branch_id: "l_fold_five",
          branch_name: "Fold 5 Items",
          twigs: [
            { id: 1, text: "Grab the clean laundry pile and bring it somewhere flat.", tier: "low" },
            { id: 2, text: "Pick out just 1 item and fold it.", tier: "low" },
            { id: 3, text: "Fold a second item and stack it on top.", tier: "low" },
            { id: 4, text: "Fold items 3 and 4.", tier: "normal" },
            { id: 5, text: "Fold item 5 — that's your target hit.", tier: "normal" },
            { id: 6, text: "Keep going — fold another 5 items.", tier: "high" },
            { id: 7, text: "Sort the folded pile into groups by person or type.", tier: "high" },
            { id: 8, text: "Match up any loose socks.", tier: "high" },
            { id: 9, text: "Stack everything neatly ready to put away.", tier: "high" }
          ]
        },
        {
          branch_id: "l_room_reset",
          branch_name: "Laundry Area Reset",
          twigs: [
            { id: 1, text: "Pick up any stray socks or clothes off the laundry room floor.", tier: "low" },
            { id: 2, text: "Toss any empty detergent pods boxes or packaging.", tier: "low" },
            { id: 3, text: "Straighten up the detergent and supplies so they're tidy.", tier: "low" },
            { id: 4, text: "Wipe down the top of the washing machine.", tier: "normal" },
            { id: 5, text: "Clear the lint filter in the dryer.", tier: "normal" },
            { id: 6, text: "Wipe down the dryer door seal.", tier: "high" },
            { id: 7, text: "Check behind the machines for anything that's fallen.", tier: "high" },
            { id: 8, text: "Give the floor a quick sweep.", tier: "high" },
            { id: 9, text: "Make sure the empty laundry baskets are stacked or stored.", tier: "high" }
          ]
        },
        {
          branch_id: "l_put_away",
          branch_name: "Put Clothes Away",
          twigs: [
            { id: 1, text: "Grab the folded pile and carry it to the right room.", tier: "low" },
            { id: 2, text: "Open the correct drawer and put 3 items in.", tier: "low" },
            { id: 3, text: "Hang up 1 item that belongs on a hanger.", tier: "low" },
            { id: 4, text: "Put away another handful of folded items.", tier: "normal" },
            { id: 5, text: "Close the drawer properly.", tier: "normal" },
            { id: 6, text: "Put away all the remaining folded items.", tier: "high" },
            { id: 7, text: "Hang up all remaining items in the wardrobe.", tier: "high" },
            { id: 8, text: "Take the empty laundry basket back to its spot.", tier: "high" },
            { id: 9, text: "Give the wardrobe or drawer a quick straighten.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 6,
      category_code: "digital_life",
      category_name: "Digital Life",
      branches: [
        {
          branch_id: "d_inbox_zero",
          branch_name: "Inbox Clear-Out",
          twigs: [
            { id: 1, text: "Delete 5 obvious junk or spam emails without opening them.", tier: "low" },
            { id: 2, text: "Unsubscribe from 1 newsletter you never read.", tier: "low" },
            { id: 3, text: "Star or flag 1 email you actually need to deal with.", tier: "low" },
            { id: 4, text: "Archive 5 emails you've already read.", tier: "normal" },
            { id: 5, text: "Delete another 10 promotional emails in one go.", tier: "normal" },
            { id: 6, text: "Reply to 1 email with a short 2-sentence response.", tier: "high" },
            { id: 7, text: "Empty your spam or trash folder.", tier: "high" },
            { id: 8, text: "Unsubscribe from 2 more mailing lists.", tier: "high" },
            { id: 9, text: "Move 5 important emails into a folder so you can find them later.", tier: "high" }
          ]
        },
        {
          branch_id: "d_photo_purge",
          branch_name: "Photo Tidy-Up",
          twigs: [
            { id: 1, text: "Open your photos and find 3 blurry or bad shots.", tier: "low" },
            { id: 2, text: "Delete those 3 straight away.", tier: "low" },
            { id: 3, text: "Delete 2 duplicate or accidental photos.", tier: "low" },
            { id: 4, text: "Scroll back 1 week and delete anything obviously pointless.", tier: "normal" },
            { id: 5, text: "Close the app — that's enough for now.", tier: "normal" },
            { id: 6, text: "Delete another 10 old screenshots you no longer need.", tier: "high" },
            { id: 7, text: "Go through 1 old month and delete the obvious rubbish.", tier: "high" },
            { id: 8, text: "Pick 5 photos you actually like and favourite them.", tier: "high" },
            { id: 9, text: "Back up your photos to cloud storage or your computer.", tier: "high" }
          ]
        },
        {
          branch_id: "d_desktop_reset",
          branch_name: "Desktop Reset",
          twigs: [
            { id: 1, text: "Close every window except the one you actually need.", tier: "low" },
            { id: 2, text: "Make a folder on the desktop called 'Sort Later' and drag 5 files into it.", tier: "low" },
            { id: 3, text: "Delete 3 old installer or download files you don't need.", tier: "low" },
            { id: 4, text: "Empty the Recycle Bin or Trash.", tier: "normal" },
            { id: 5, text: "Close any browser tabs you haven't looked at in days.", tier: "normal" },
            { id: 6, text: "Drag another 10 loose desktop files into the sorting folder.", tier: "high" },
            { id: 7, text: "Delete 5 old screenshots from the desktop.", tier: "high" },
            { id: 8, text: "Rename 1 folder so you can actually tell what's in it.", tier: "high" },
            { id: 9, text: "Set a calmer wallpaper if the current one is cluttered or distracting.", tier: "high" }
          ]
        },
        {
          branch_id: "d_notifications_reset",
          branch_name: "Notification Reset",
          twigs: [
            { id: 1, text: "Clear your full notification tray in one swipe.", tier: "low" },
            { id: 2, text: "Turn off notifications for 1 app that interrupts you too much.", tier: "low" },
            { id: 3, text: "Put your phone on Do Not Disturb for the next hour.", tier: "low" },
            { id: 4, text: "Go into settings and mute 1 noisy group chat.", tier: "normal" },
            { id: 5, text: "Turn off badge notifications for 2 apps you don't urgently need.", tier: "normal" },
            { id: 6, text: "Go through your notification settings and turn off 3 more.", tier: "high" },
            { id: 7, text: "Delete or archive 5 old message threads you're done with.", tier: "high" },
            { id: 8, text: "Remove 1 app from your home screen that you keep accidentally tapping.", tier: "high" },
            { id: 9, text: "Set a specific window for checking notifications — and block them outside it.", tier: "high" }
          ]
        },
        {
          branch_id: "d_phone_clutter",
          branch_name: "Phone De-Clutter",
          twigs: [
            { id: 1, text: "Delete 1 app you haven't opened in over a month.", tier: "low" },
            { id: 2, text: "Clear your browser history on your phone.", tier: "low" },
            { id: 3, text: "Delete 3 old text threads you don't need.", tier: "low" },
            { id: 4, text: "Move 3 utility apps off your main screen into a folder.", tier: "normal" },
            { id: 5, text: "Delete another 3 apps you genuinely don't use.", tier: "normal" },
            { id: 6, text: "Clear your phone's downloads folder.", tier: "high" },
            { id: 7, text: "Check your storage — delete the biggest files you don't need.", tier: "high" },
            { id: 8, text: "Tidy your home screen so only your most-used apps are visible.", tier: "high" },
            { id: 9, text: "Restart your phone to clear background apps and free memory.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 7,
      category_code: "life_admin",
      category_name: "Life Admin",
      branches: [
        {
          branch_id: "la_paper_sort",
          branch_name: "Mail & Paper Sort",
          twigs: [
            { id: 1, text: "Pick up 5 pieces of paper from the pile — just 5.", tier: "low" },
            { id: 2, text: "Throw away any obvious junk mail straight into recycling.", tier: "low" },
            { id: 3, text: "Stack the ones you need to keep into a single tidy pile.", tier: "low" },
            { id: 4, text: "Open 1 envelope that's been sitting there.", tier: "normal" },
            { id: 5, text: "Put 1 important document somewhere you can find it.", tier: "normal" },
            { id: 6, text: "Sort through another 10 loose papers.", tier: "high" },
            { id: 7, text: "Recycle everything in the pile that's clearly not needed.", tier: "high" },
            { id: 8, text: "Open the rest of the unopened envelopes.", tier: "high" },
            { id: 9, text: "File the 'keep' pile into a folder or drawer.", tier: "high" }
          ]
        },
        {
          branch_id: "la_bill_pay",
          branch_name: "Bill Check-In",
          twigs: [
            { id: 1, text: "Open your banking app.", tier: "low" },
            { id: 2, text: "Check what your current balance is.", tier: "low" },
            { id: 3, text: "Find out when your next bill is due.", tier: "low" },
            { id: 4, text: "Pay 1 bill that's due soon.", tier: "normal" },
            { id: 5, text: "Check that your last payment actually went through.", tier: "normal" },
            { id: 6, text: "Pay 1 more overdue or upcoming bill.", tier: "high" },
            { id: 7, text: "Set up a reminder for the next bill due date.", tier: "high" },
            { id: 8, text: "Review your last 5 transactions — anything unexpected?", tier: "high" },
            { id: 9, text: "Check if any subscriptions have renewed that you forgot about.", tier: "high" }
          ]
        },
        {
          branch_id: "la_appointments",
          branch_name: "Appointments & Bookings",
          twigs: [
            { id: 1, text: "Think of 1 appointment you've been putting off making.", tier: "low" },
            { id: 2, text: "Find the phone number or website you need.", tier: "low" },
            { id: 3, text: "Check your calendar for a couple of free slots.", tier: "low" },
            { id: 4, text: "Book the appointment — call, text, or online.", tier: "normal" },
            { id: 5, text: "Add it to your calendar right now.", tier: "normal" },
            { id: 6, text: "Set a reminder the day before so you don't forget.", tier: "high" },
            { id: 7, text: "Think of a second appointment that needs making and book it.", tier: "high" },
            { id: 8, text: "Write down anything you need to prepare or bring.", tier: "high" },
            { id: 9, text: "Set a second reminder for 1 hour before the appointment.", tier: "high" }
          ]
        },
        {
          branch_id: "la_budget",
          branch_name: "Money Check-In",
          twigs: [
            { id: 1, text: "Open your banking app and just look at the balance.", tier: "low" },
            { id: 2, text: "Scroll through the last 3 transactions.", tier: "low" },
            { id: 3, text: "Notice if anything looks unusual or surprising.", tier: "low" },
            { id: 4, text: "Mentally note 1 area where you've been spending more than expected.", tier: "normal" },
            { id: 5, text: "Close the app — awareness is the first step.", tier: "normal" },
            { id: 6, text: "Check if any subscriptions have renewed recently.", tier: "high" },
            { id: 7, text: "Cancel 1 subscription you're not using.", tier: "high" },
            { id: 8, text: "Move a small amount to savings — even £5 or $5 counts.", tier: "high" },
            { id: 9, text: "Write down 1 financial thing you want to sort this week.", tier: "high" }
          ]
        },
        {
          branch_id: "la_file_organize",
          branch_name: "Documents & Filing",
          twigs: [
            { id: 1, text: "Pick up 3 loose papers from around your space.", tier: "low" },
            { id: 2, text: "Decide: does each one need action, filing, or binning?", tier: "low" },
            { id: 3, text: "Bin or recycle the ones you don't need.", tier: "low" },
            { id: 4, text: "Put the action items somewhere visible so you don't forget.", tier: "normal" },
            { id: 5, text: "File the keep items into a folder.", tier: "normal" },
            { id: 6, text: "Go through 5 more papers from the backlog.", tier: "high" },
            { id: 7, text: "Create 1 new folder for something you keep losing track of.", tier: "high" },
            { id: 8, text: "Scan or photograph 1 important document to keep a digital copy.", tier: "high" },
            { id: 9, text: "Clear out 1 folder full of old documents you no longer need.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 8,
      category_code: "work_productivity",
      category_name: "Work / Productivity",
      branches: [
        {
          branch_id: "w_workspace_reset",
          branch_name: "Workspace Reset",
          twigs: [
            { id: 1, text: "Grab 3 pieces of rubbish from your desk and bin them.", tier: "low" },
            { id: 2, text: "Move any cups or glasses to the kitchen.", tier: "low" },
            { id: 3, text: "Stack loose papers into one pile in the corner.", tier: "low" },
            { id: 4, text: "Give your keyboard and mouse a quick wipe down.", tier: "normal" },
            { id: 5, text: "Close every browser tab you're not actively using.", tier: "normal" },
            { id: 6, text: "Clear the paper pile by filing or binning each sheet.", tier: "high" },
            { id: 7, text: "Give your monitor screen a wipe with a dry cloth.", tier: "high" },
            { id: 8, text: "Tidy up pens, cables and anything else cluttering the desk.", tier: "high" },
            { id: 9, text: "Empty the desk bin.", tier: "high" }
          ]
        },
        {
          branch_id: "w_start_session",
          branch_name: "Start Work Session",
          twigs: [
            { id: 1, text: "Write down the 1 most important thing to get done today.", tier: "low" },
            { id: 2, text: "Close anything on your screen that isn't related to that task.", tier: "low" },
            { id: 3, text: "Put your phone face-down or in another room.", tier: "low" },
            { id: 4, text: "Open the file, app, or tab you actually need to work.", tier: "normal" },
            { id: 5, text: "Set a timer for 25 minutes and just start.", tier: "normal" },
            { id: 6, text: "When the timer goes — take a 5 minute break, then reset.", tier: "high" },
            { id: 7, text: "Write down where you got to so you can pick it up easily next time.", tier: "high" },
            { id: 8, text: "Close unneeded tabs again — they creep back.", tier: "high" },
            { id: 9, text: "Note the next small action for this task before you stop.", tier: "high" }
          ]
        },
        {
          branch_id: "w_next_step",
          branch_name: "Unstick Yourself",
          twigs: [
            { id: 1, text: "Write down what you're stuck on in one sentence.", tier: "low" },
            { id: 2, text: "Break it into the 2 smallest possible pieces.", tier: "low" },
            { id: 3, text: "Do the very first tiny piece right now.", tier: "low" },
            { id: 4, text: "If you can't start, write down why — be specific.", tier: "normal" },
            { id: 5, text: "Pick the smallest part of the stuck thing and do just that.", tier: "normal" },
            { id: 6, text: "Set a 10 minute timer and make any progress at all.", tier: "high" },
            { id: 7, text: "Write 'done' next to the thing you just did — it counts.", tier: "high" },
            { id: 8, text: "Identify the very next step after this one.", tier: "high" },
            { id: 9, text: "Do that next step now while you have momentum.", tier: "high" }
          ]
        },
        {
          branch_id: "w_weekly_planning",
          branch_name: "Weekly Brain Dump",
          twigs: [
            { id: 1, text: "Grab paper or open a notes app.", tier: "low" },
            { id: 2, text: "Write down everything on your mind — don't filter it.", tier: "low" },
            { id: 3, text: "Circle the 1 thing that matters most this week.", tier: "low" },
            { id: 4, text: "Write down 2 other things that need to happen this week.", tier: "normal" },
            { id: 5, text: "Put those 3 things into your calendar or task app.", tier: "normal" },
            { id: 6, text: "Cross off or remove anything on the list that doesn't need to happen.", tier: "high" },
            { id: 7, text: "Assign a rough day to each of the 3 priorities.", tier: "high" },
            { id: 8, text: "Set 1 reminder for each priority so you don't have to remember.", tier: "high" },
            { id: 9, text: "Close the planning doc — you're done, go do the things.", tier: "high" }
          ]
        },
        {
          branch_id: "w_shutdown",
          branch_name: "End-of-Day Shutdown",
          twigs: [
            { id: 1, text: "Write down the 1 thing you want to start with tomorrow.", tier: "low" },
            { id: 2, text: "Close all your work tabs and files.", tier: "low" },
            { id: 3, text: "Clear any last bits of rubbish off your desk.", tier: "low" },
            { id: 4, text: "Check your task list — mark anything you finished today as done.", tier: "normal" },
            { id: 5, text: "Anything not done — move it to tomorrow or delete it.", tier: "normal" },
            { id: 6, text: "Put your notebook or planner away.", tier: "high" },
            { id: 7, text: "Shut your laptop lid or turn off the monitor.", tier: "high" },
            { id: 8, text: "Step away from your desk physically.", tier: "high" },
            { id: 9, text: "You're done. Work is over for today — that's enough.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 9,
      category_code: "morning_routine",
      category_name: "Morning Routine",
      branches: [
        {
          branch_id: "m_wake_up",
          branch_name: "Wake Up Kickoff",
          twigs: [
            { id: 1, text: "Turn off your alarm.", tier: "low" },
            { id: 2, text: "Sit upright on the edge of the bed for a moment.", tier: "low" },
            { id: 3, text: "Open the curtains or blinds — let some light in.", tier: "low" },
            { id: 4, text: "Put your feet on the floor and sit there for 30 seconds.", tier: "normal" },
            { id: 5, text: "Stand up. That's the hardest part — it's done.", tier: "normal" },
            { id: 6, text: "Put on slippers or shoes to signal your brain it's time to move.", tier: "high" },
            { id: 7, text: "Make your bed roughly — just pull it up.", tier: "high" },
            { id: 8, text: "Think of 1 small thing you're looking forward to today.", tier: "high" },
            { id: 9, text: "Head to the kitchen — the next part starts there.", tier: "high" }
          ]
        },
        {
          branch_id: "m_hygiene_reset",
          branch_name: "Quick Hygiene Reset",
          twigs: [
            { id: 1, text: "Splash cold water on your face.", tier: "low" },
            { id: 2, text: "Brush your teeth.", tier: "low" },
            { id: 3, text: "Deodorant on.", tier: "low" },
            { id: 4, text: "Wash your face properly.", tier: "normal" },
            { id: 5, text: "Apply any skin care or moisturiser if that's part of your routine.", tier: "normal" },
            { id: 6, text: "Comb or sort your hair.", tier: "high" },
            { id: 7, text: "Get dressed — even if you're staying home.", tier: "high" },
            { id: 8, text: "Put on a clean top at minimum — it shifts how you feel.", tier: "high" },
            { id: 9, text: "Give yourself a quick look in the mirror — you're good.", tier: "high" }
          ]
        },
        {
          branch_id: "m_hydration",
          branch_name: "Hydration & Fuel",
          twigs: [
            { id: 1, text: "Drink a glass of water — first thing, before anything else.", tier: "low" },
            { id: 2, text: "Put the kettle on or start the coffee.", tier: "low" },
            { id: 3, text: "Take any morning medication or vitamins if you have them.", tier: "low" },
            { id: 4, text: "Drink your tea or coffee slowly — no screens for 5 minutes.", tier: "normal" },
            { id: 5, text: "Finish the drink before you do anything else.", tier: "normal" },
            { id: 6, text: "Have a small snack if you're not ready for a full breakfast.", tier: "high" },
            { id: 7, text: "Refill your water bottle for the day.", tier: "high" },
            { id: 8, text: "Put yesterday's cups or glasses in the sink.", tier: "high" },
            { id: 9, text: "Wipe down the kitchen counter while you're there.", tier: "high" }
          ]
        },
        {
          branch_id: "m_breakfast",
          branch_name: "Breakfast Lite",
          twigs: [
            { id: 1, text: "Open the fridge and actually look at what's there.", tier: "low" },
            { id: 2, text: "Pick the easiest thing — toast, cereal, yoghurt, anything.", tier: "low" },
            { id: 3, text: "Make it. Don't overthink it.", tier: "low" },
            { id: 4, text: "Sit down and eat it — not standing over the sink.", tier: "normal" },
            { id: 5, text: "Drink something with it — water or juice.", tier: "normal" },
            { id: 6, text: "Put your dish straight into the sink when you're done.", tier: "high" },
            { id: 7, text: "Wipe down the bench where you made it.", tier: "high" },
            { id: 8, text: "Put away anything you left out.", tier: "high" },
            { id: 9, text: "You've eaten. That matters more than people think.", tier: "high" }
          ]
        },
        {
          branch_id: "m_day_kickoff",
          branch_name: "Day Kickoff",
          twigs: [
            { id: 1, text: "Write down the 1 thing that absolutely needs doing today.", tier: "low" },
            { id: 2, text: "Check if you have any appointments or calls today.", tier: "low" },
            { id: 3, text: "Glance at your phone — deal with anything urgent only.", tier: "low" },
            { id: 4, text: "Write down 1 more thing you'd like to get done if possible.", tier: "normal" },
            { id: 5, text: "Put your phone down and start on that first thing.", tier: "normal" },
            { id: 6, text: "Do 10 minutes of the most important task before doing anything else.", tier: "high" },
            { id: 7, text: "Check in — how's your energy? Adjust your expectations if needed.", tier: "high" },
            { id: 8, text: "Set 1 reminder for later in the day so nothing gets missed.", tier: "high" },
            { id: 9, text: "Morning is underway. You started — that's what counts.", tier: "high" }
          ]
        }
      ]
    },
    {
      category_id: 10,
      category_code: "evening_routine",
      category_name: "Evening Routine",
      branches: [
        {
          branch_id: "e_wind_down",
          branch_name: "Evening Wind Down",
          twigs: [
            { id: 1, text: "Switch off the overhead lights and use lamps instead.", tier: "low" },
            { id: 2, text: "Put your phone down somewhere across the room.", tier: "low" },
            { id: 3, text: "Sit somewhere comfortable and do nothing for 2 minutes.", tier: "low" },
            { id: 4, text: "Drink a glass of water.", tier: "normal" },
            { id: 5, text: "Put on something calm — music, a podcast, or silence.", tier: "normal" },
            { id: 6, text: "Tidy the main room you've been in today — just the obvious stuff.", tier: "high" },
            { id: 7, text: "Lay out anything you need for tomorrow morning.", tier: "high" },
            { id: 8, text: "Set your alarm for tomorrow.", tier: "high" },
            { id: 9, text: "Take 5 slow breaths before moving to bed.", tier: "high" }
          ]
        },
        {
          branch_id: "e_digital_wind_down",
          branch_name: "Digital Wind-Down",
          twigs: [
            { id: 1, text: "Close all the social media tabs or apps.", tier: "low" },
            { id: 2, text: "Put your phone on Do Not Disturb.", tier: "low" },
            { id: 3, text: "Plug your phone in somewhere that isn't your bedside table.", tier: "low" },
            { id: 4, text: "Clear your notification tray so tomorrow starts clean.", tier: "normal" },
            { id: 5, text: "Close your laptop lid or turn off the monitor.", tier: "normal" },
            { id: 6, text: "Don't pick the phone back up for at least 20 minutes.", tier: "high" },
            { id: 7, text: "Write down any thoughts buzzing in your head so they're out of your mind.", tier: "high" },
            { id: 8, text: "Read something physical — even just a few pages.", tier: "high" },
            { id: 9, text: "Screens are done. Your brain will thank you for this.", tier: "high" }
          ]
        },
        {
          branch_id: "e_tomorrow_prep",
          branch_name: "Tomorrow Prep",
          twigs: [
            { id: 1, text: "Think of the 1 thing you need to do first tomorrow.", tier: "low" },
            { id: 2, text: "Write it down somewhere you'll see it in the morning.", tier: "low" },
            { id: 3, text: "Check if you need to take anything with you tomorrow.", tier: "low" },
            { id: 4, text: "Put those things by the door now.", tier: "normal" },
            { id: 5, text: "Make sure your phone is charged for tomorrow.", tier: "normal" },
            { id: 6, text: "Put out the clothes you want to wear tomorrow.", tier: "high" },
            { id: 7, text: "Prep anything for breakfast — even just putting cereal out.", tier: "high" },
            { id: 8, text: "Set your alarm if you haven't already.", tier: "high" },
            { id: 9, text: "Tomorrow is as ready as it can be. That's enough.", tier: "high" }
          ]
        },
        {
          branch_id: "e_bedroom_reset",
          branch_name: "Bedroom Nightly Reset",
          twigs: [
            { id: 1, text: "Pick up 3 things off the bedroom floor.", tier: "low" },
            { id: 2, text: "Put any clothes in the right place — basket or hanger.", tier: "low" },
            { id: 3, text: "Clear your nightstand of anything that doesn't belong.", tier: "low" },
            { id: 4, text: "Pull the duvet back ready to get into.", tier: "normal" },
            { id: 5, text: "Make sure there's a glass of water nearby.", tier: "normal" },
            { id: 6, text: "Close the curtains or blinds.", tier: "high" },
            { id: 7, text: "Plug your phone in — ideally not right next to the bed.", tier: "high" },
            { id: 8, text: "Give yourself credit for anything you got done today.", tier: "high" },
            { id: 9, text: "Room is ready. You can sleep.", tier: "high" }
          ]
        },
        {
          branch_id: "e_sleep_prep",
          branch_name: "Sleep Prep",
          twigs: [
            { id: 1, text: "Brush your teeth.", tier: "low" },
            { id: 2, text: "Wash your face or do your evening skin routine.", tier: "low" },
            { id: 3, text: "Change into your sleep clothes.", tier: "low" },
            { id: 4, text: "Take any evening medication if needed.", tier: "normal" },
            { id: 5, text: "Get into bed.", tier: "normal" },
            { id: 6, text: "Turn off the main light.", tier: "high" },
            { id: 7, text: "No scrolling — put the phone down.", tier: "high" },
            { id: 8, text: "Take 5 slow deep breaths and let your body relax.", tier: "high" },
            { id: 9, text: "You showed up today. Rest now.", tier: "high" }
          ]
        }
      ]
    }
  ]
};