# Code Quality Encouragement
Help your organization adopt new eslint rules in existing legacy code bases.  

Your organization is maturing and wants to start incorporating best practices in code quality, yay! 
But you've got an existing code base that has been around long enough that turning on new rules will result
dozens, hundreds or thousands of warnings or errors that can't all be auto-fixed or fixed in one go as part of enabling the lint feature. 

How do you adopt the new rules without generating extra noise for the developers?

You use code quality encouragement! 

Encouragement works by looking at the change in quality metrics and providing positively worded comments to steer pull requests 
towards improving code quality over time. 

Let's take for example your organization wants to adopt the `no-undef` eslint rule. Upon adding the rule to your eslint configuration, you suddenly get 540 violations.
Some violations might be errors, some of them might just need to be mentioned in the `/*global */` comment because they are legit references. 
But there's too many to deal with right now. And we'd really prefer not to add any more violations starting now.

We could enable the rule with warnings. But it's really taxing on devs to run eslint and be bombarded with dozens or 
hundreds of violations and try to sort out which notices are related to their changes. 

Instead, we could create (or edit) an additional eslint file `.adoption.eslint.rc`. This file would extend the base lint configuration, and add the new rule(s) being adopted. 

Developers still use the lint command (`yarn lint`) against `.eslintrc` locally to make sure they are compliant with established rules.

But now, using CI workflows, we run lint using the expanded list of rules (using the adoption config) and measure how code quality has changed.
We can compare the lint result of the pull request against the base branch and determine if violations have been removed or added for both new and old eslint rules. 
Using this information we can comment on the pull request to provide direction to improve code quality.     


## Example encouragements
Here's some examples of comments we can leave on pull requests.

### A file modified in a pull request has eslint violations (either existing or added)
> Some small changes could make a big difference!
> 
> Your pull request looks great, but we found some small changes that could really make it shine! 
> - x issue
> - y issue
 
**Desired effect:** The developer will update their PR to address violations to rules that they have added.

### The PR was updated and identified violations were resolved
> It takes a village!
> 
> Great work helping us reach our code quality goals!

**Desired effect** The developer feels good for contributing towards a group goal

### A file modified in the pull request reduced violations to zero
> Campsite hero!
> 
> You left this code nicer than when you found it! Thanks for resolving:
> - [n] x issues
> - [n] y issues

**Desired effect** The developer feels good by being recognized for addressing tech debt 

