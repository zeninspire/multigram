# Project Name #

<!--
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows.

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->

## Heading ##
  Multigram

## Sub-Heading ##
  (search for the ins posts you truly want)

## Summary ##
  The Multigram web-app allows users to search by multiple hashtags, and find the most desirable results.

## Problem ##
  The current instagram app only shows results filtered by one hashtag, which prevents specific searching. For instance, if user would like to check out a new peruvian restaurant in Chicago, rather than searching #peruvianrestaurantsinChicago, they can search an aggregated filtered results by inputting #peruvian #chicago #restaurant

## Solution ##
  Bringing in Instagram API, filter by the first hashtag, then inside the results, filter by the second hashtag, lather rinse repeat.

## Quote from You ##
  Better instagram search.

## How to Get Started ##
  0. draw the app outline, see how front and back connect;
  1. examine the specific instagram api requests;
  2. build up the algorithm for multiple hashtag searching;
  3. build up the front-end using Angular JS, HTML, CSS --> basic framework;
  4. build up the backend based on algorithm in step2;
  5. fine tune.

## Customer Quote ##
  Awesome!

## Closing and Call to Action ##
  The following sections includes a list of potential features that may or may not be beyond the scope of MVP, consider implementing while time allows (not in priority order):
  1. on click of result image, 1). enlarges and shows all details of the original posts; 2)on click of the enlarged image, takes the user to the specific post location in instagram;
  2. allows users to create a user profile, and save previous searches;
  3. build up a like button, to slim down the save feature in step 2 (rather than saving the entire search results, save only the ones the user has liked)
  4. add share feature.
