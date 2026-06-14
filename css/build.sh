#!/bin/bash
# Regénère les bundles CSS minifiés depuis les fichiers sources.
# Usage : bash css/build.sh
# À relancer après chaque modification d'un fichier dans css/

set -e
cd "$(dirname "$0")"

# Bundle pour index.html
perl - style.css projects-modern.css navbar-interactive.css > bundle.min.css <<'PERL'
my $css='';
for my $f (@ARGV) { open(my $fh,'<',$f) or die "$f: $!"; $css.=do{local $/;<$fh>}; close $fh; $css.="\n"; }
$css =~ s{/\*.*?\*/}{}gs;
# NB : on ne collapse PAS les espaces autour de + et ~ (cassent les calc() et combinateurs)
$css =~ s/\s*([{};:,>])\s*/$1/g;
$css =~ s/\s+/ /g;
$css =~ s/^\s+|\s+$//g;
$css =~ s/\(\s+/(/g;
$css =~ s/\s+\)/)/g;
$css =~ s/;}/}/g;
$css =~ s/(?<=[\s:,(])0+(\.\d+)/$1/g;
print $css . "\n";
PERL

# Bundle pour mentions-legales.html
perl - style-mentions.css navbar-interactive.css > bundle-mentions.min.css <<'PERL'
my $css='';
for my $f (@ARGV) { open(my $fh,'<',$f) or die "$f: $!"; $css.=do{local $/;<$fh>}; close $fh; $css.="\n"; }
$css =~ s{/\*.*?\*/}{}gs;
# NB : on ne collapse PAS les espaces autour de + et ~ (cassent les calc() et combinateurs)
$css =~ s/\s*([{};:,>])\s*/$1/g;
$css =~ s/\s+/ /g;
$css =~ s/^\s+|\s+$//g;
$css =~ s/\(\s+/(/g;
$css =~ s/\s+\)/)/g;
$css =~ s/;}/}/g;
$css =~ s/(?<=[\s:,(])0+(\.\d+)/$1/g;
print $css . "\n";
PERL

# Mise à jour automatique du cache-bust dans les HTML
HASH=$(md5 -q bundle.min.css | cut -c1-8)
sed -i '' "s/bundle\.min\.css?v=[^\"']*/bundle.min.css?v=$HASH/" ../index.html

HASH_ML=$(md5 -q bundle-mentions.min.css | cut -c1-8)
sed -i '' "s/bundle-mentions\.min\.css?v=[^\"']*/bundle-mentions.min.css?v=$HASH_ML/" ../mentions-legales.html

echo "✅ Bundles regénérés :"
ls -la bundle*.min.css
echo "🔖 Cache-bust : bundle.min.css?v=$HASH | bundle-mentions.min.css?v=$HASH_ML"
