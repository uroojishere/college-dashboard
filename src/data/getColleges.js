import supabase from "@/lib/supabase";
export const getColleges = async () => {
    const { data, error } = await supabase.from("colleges").select("*");
    if (error) {
        throw new Error(error.message);
    }
    return data;
};
