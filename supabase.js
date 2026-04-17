const { supabasekey, supabaseurl } = require('./myenv');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = supabaseurl;
const supabaseKey = supabasekey;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;