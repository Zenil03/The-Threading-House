# 1. Create a new branch from master
git checkout master
git pull  # Ensure master is up-to-date
git checkout -b feature-name  # Replace 'feature-name' with your branch name

# 2. Make your changes and commit them
# ... Edit files ...
git add .
git commit -m "Description of the changes made"

# 3. Push your feature branch to GitHub
git push origin feature-name

# 4. Once ready to deploy, merge changes back to master
git checkout master
git pull  # Get any recent changes to master
git merge feature-name

# 5. Resolve any merge conflicts if they occur
# If conflicts exist:
# ... Edit conflicted files ...
git add .
git commit -m "Merge feature-name into master"

# 6. Push to master to trigger automatic deployment
git push

# 7. GitHub Actions will automatically:
#    - Build your Angular application
#    - Deploy to GitHub Pages at https://zenil03.github.io/The-Threading-House/

<!-- create new branch and push it to master it will auto deploy-->

git add .
git commit -m "Your commit message"

git push origin feature-branch

git checkout master

git pull

git merge feature-branch

git add .
git commit -m "Merge feature-branch into master"

git push


<!--  -->

Add and commit your changes in your feature branch:
bashgit add .
git commit -m "Your commit message"

Push your feature branch to GitHub (replace "your-branch-name" with your actual branch name):
bashgit push origin your-branch-name

Switch to the master branch:
bashgit checkout master

Pull the latest changes from master:
bashgit pull

Merge your feature branch into master (again, replace with your actual branch name):
bashgit merge your-branch-name

If there are any merge conflicts, resolve them and commit the merge:
bashgit add .
git commit -m "Merge your-branch-name into master"

Push the updated master to GitHub:
bashgit push


After pushing to master, GitHub Actions will automatically build and deploy your site. You don't need to do anything else for deployment.